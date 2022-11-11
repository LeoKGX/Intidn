import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-editar-infopersonal',
  templateUrl: './editar-infopersonal.component.html',
  styleUrls: ['./editar-infopersonal.component.css']
})
export class EditarInfopersonalComponent implements OnInit {

  formEditar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private editarService: EditarService,
    ) {
    this.formEditar = this.formbuilder.group(
          {
            mail:['',[Validators.required]],
            ocupation:['',[Validators.required]],
            city:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get Mail(){
    return this.formEditar.get( 'mail' );
  }

  get Ocupation(){
    return this.formEditar.get( 'ocupation' );
  }

  get City(){
    return this.formEditar.get( 'city' );
  }

  onSend(event : Event){
    event.preventDefault;
    this.editarService.editarInfoPersonal(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
