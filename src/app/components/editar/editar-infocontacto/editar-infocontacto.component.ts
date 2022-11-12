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
            mail:['',[Validators.required]],
            nuevomail:['',[Validators.required]],
            NuevoTelefono:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get Mail(){
    return this.formEditar.get( 'mail' );
  }

  get NuevoMail(){
    return this.formEditar.get( 'nuevomail' );
  }

  get NuevoTelefono(){
    return this.formEditar.get( 'nuevotelefono' );
  }

  onSend(event : Event){
    event.preventDefault;
    this.editarService.editarInfoContacto(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
