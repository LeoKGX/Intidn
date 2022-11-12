import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  formEditar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private editarService: EditarService,
    ) {
    this.formEditar = this.formbuilder.group(
          {
            name:['',[Validators.required]],
            description:['',[Validators.required]],
            tech:['',[Validators.required]],
          }
        )
        }

  ngOnInit(): void {
  }

  get Name(){
    return this.formEditar.get( 'name' );
  }

  get Description(){
    return this.formEditar.get( 'description' );
  }

  get Tech(){
    return this.formEditar.get( 'tech' );
  }

  onSend(event : Event){
    event.preventDefault;
    console.log(this.formEditar.value)
    this.editarService.aniadirProyecto(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }

}
