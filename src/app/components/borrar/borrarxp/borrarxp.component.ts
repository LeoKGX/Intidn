import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrarService } from 'src/app/services/borrar.service';

@Component({
  selector: 'app-borrarxp',
  templateUrl: './borrarxp.component.html',
  styleUrls: ['./borrarxp.component.css']
})
export class BorrarxpComponent implements OnInit {

  formBorrar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private borrarService: BorrarService,
    ) {
    this.formBorrar = this.formbuilder.group(
          {
            nombreEmpresa:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get NombreEmpresa(){
    return this.formBorrar.get( 'nombreEmpresa' );
  }



  onSend(event : Event){
    event.preventDefault;
    console.log(this.formBorrar.value);
    this.borrarService.borrarXP(this.formBorrar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}

