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
            techs:this.techList
          }
        )
        }

  ngOnInit(): void {
  }

  techList:any;

  get Name(){
    return this.formEditar.get( 'name' );
  }

  get Description(){
    return this.formEditar.get( 'description' );
  }

  get Tech(){
    this.techList(this.Tech)
    return this.formEditar.get( 'tech' );
  }

  onSend(event : Event){
    event.preventDefault;
    console.log(this.formEditar.value)
    this.editarService.aniadirXp(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }

}
