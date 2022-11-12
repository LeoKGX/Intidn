import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrarService } from 'src/app/services/borrar.service';

@Component({
  selector: 'app-borraracercademi',
  templateUrl: './borraracercademi.component.html',
  styleUrls: ['./borraracercademi.component.css']
})
export class BorraracercademiComponent implements OnInit {

  formBorrar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private borrarService: BorrarService,
    ) {
    this.formBorrar = this.formbuilder.group(
          {
            about:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get About(){
    return this.formBorrar.get( 'about' );
  }



  onSend(event : Event){
    event.preventDefault;
    console.log(this.formBorrar.value);
    this.borrarService.borrarAcercaDeMi(this.formBorrar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
