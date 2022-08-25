import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  formEditar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private editarService: EditarService,
    ) {
    this.formEditar = this.formbuilder.group(
          {
            school:['',[Validators.required]],
            title:['',[Validators.required]],
            page:['',[Validators.required]],
            img:['',[Validators.required]],
            fecha_inicio:['',[Validators.required]],
            fecha_fin:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get School(){
    return this.formEditar.get( 'school' );
  }

  get Title(){
    return this.formEditar.get( 'title' );
  }

  get Page(){
    return this.formEditar.get( 'page' );
  }

  get Img(){
    return this.formEditar.get( 'img' );
  }

  get Fecha_inicio(){
    return this.formEditar.get( 'fecha_inicio' );
  }

  get Fecha_fin(){
    return this.formEditar.get( 'fecha_fin' );
  }


  onSend(event : Event){
    event.preventDefault;
    this.editarService.aniadirEdu(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
