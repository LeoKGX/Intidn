import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrarService } from 'src/app/services/borrar.service';

@Component({
  selector: 'app-borrarproye',
  templateUrl: './borrarproye.component.html',
  styleUrls: ['./borrarproye.component.css']
})
export class BorrarproyeComponent implements OnInit {

  formBorrar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private borrarService: BorrarService,
    ) {
    this.formBorrar = this.formbuilder.group(
          {
            nombre:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get Nombre(){
    return this.formBorrar.get( 'nombre' );
  }



  onSend(event : Event){
    event.preventDefault;
    console.log(this.formBorrar.value);
    this.borrarService.borrarProyecto(this.formBorrar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
