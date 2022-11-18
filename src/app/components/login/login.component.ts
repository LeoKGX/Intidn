import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  error: boolean = this.loginservice.error ;

  constructor(private formbuilder: FormBuilder, private loginservice: UsersService, private ruta: Router) {
    this.form = this.formbuilder.group(
      {
        email:['',[Validators.required, Validators.email]],
        pass:['',[Validators.required, Validators.minLength(8)]],
        deviceInfo: this.formbuilder.group({
          deviceId:[""],
          deviceType:[""],
          notificationToken:[""]
        })
      });
  }

  ngOnInit(): void {
    this.ruta.routeReuseStrategy.shouldReuseRoute = () => { return false; };
  }

  get Email(){
    return this.form.get( 'email' );
  }

  get Pass(){
    return this.form.get( 'pass' );
  }

  onEnviar(event : Event){
    event.preventDefault;
    this.loginservice.iniciarSesion(this.form.value).subscribe(data=> {
      console.log("data: " + JSON.stringify(data));
      this.loginservice.error = false;
      this.ruta.navigate(['/portfolio']);
    },
    () =>
      {
        this.loginservice.error = true;
        this.ruta.navigate(['/login']);
      }
    )
  }
}
