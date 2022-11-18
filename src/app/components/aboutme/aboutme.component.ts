import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private datosPorf:DataService, private loginService: UsersService) { }

  aboutmeList:any;
  mostrarAniadirAboutMe = false;
  mostrarBorrarAcerca= false;
  protected userloged : boolean = this.loginService.userlogedin();

  ngOnInit(): void {
    this.datosPorf.obtenerDatosAboutMe().subscribe(data => {
      this.aboutmeList = data;
    });

  }

}
