import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-editar-foto-perfil',
  templateUrl: './editar-foto-perfil.component.html',
  styleUrls: ['./editar-foto-perfil.component.css']
})
export class EditarFotoPerfilComponent implements OnInit {

  formEditar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private editarService: EditarService,
    ) {
    this.formEditar = this.formbuilder.group(
          {
            mail:['',[Validators.required, Validators.email]],
            imglink:['',[Validators.required, Validators.minLength(8)]],
          }
        )
        }

  ngOnInit(): void {
  }

  get Mail(){
    return this.formEditar.get( 'mail' );
  }

  get Imglink(){
    return this.formEditar.get( 'imglink' );
  }

  onSend(event : Event){
    event.preventDefault;
    this.editarService.editarFotoPerfil(this.formEditar.value ).subscribe(data=> {
     window.location.reload();
    });
  }
}
