import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-xperience',
  templateUrl: './xperience.component.html',
  styleUrls: ['./xperience.component.css']
})
export class XperienceComponent implements OnInit {

  formEditar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private editarService: EditarService,
    ) {
    this.formEditar = this.formbuilder.group(
          {
            nombreEmpresa:['',[Validators.required]],
            puesto:['',[Validators.required]],
            fechaInicio:['',[Validators.required]],
            fechaFin:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get NombreEmpresa(){
    return this.formEditar.get( 'nombreEmpresa' );
  }

  get Puesto(){
    return this.formEditar.get( 'puesto' );
  }

  get FechaInicio(){
    return this.formEditar.get( 'fechaInicio' );
  }

  get FechaFin(){
    return this.formEditar.get( 'fechaFin' );
  }


  onSend(event : Event){
    event.preventDefault;
    this.editarService.aniadirXp(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}

