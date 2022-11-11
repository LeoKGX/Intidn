import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-editar-infocontacto',
  templateUrl: './editar-infocontacto.component.html',
  styleUrls: ['./editar-infocontacto.component.css']
})
export class EditarInfocontactoComponent implements OnInit {

  formEditar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private editarService: EditarService,
    ) {
    this.formEditar = this.formbuilder.group(
          {
            mailactual:['',[Validators.required]],
            mailnuevo:['',[Validators.required]],
            telefononuevo:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get MailActual(){
    return this.formEditar.get( 'mailactual' );
  }

  get MailNuevo(){
    return this.formEditar.get( 'mailnuevo' );
  }

  get TelefonoNuevo(){
    return this.formEditar.get( 'telefononuevo' );
  }

  onSend(event : Event){
    event.preventDefault;
    this.editarService.editarInfoContacto(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
