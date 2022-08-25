import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-editar-aboutme',
  templateUrl: './editar-aboutme.component.html',
  styleUrls: ['./editar-aboutme.component.css']
})
export class EditarAboutmeComponent implements OnInit {

  formEditar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private editarService: EditarService,
    ) {
    this.formEditar = this.formbuilder.group(
          {
            mail:['',[Validators.required]],
            aboutme:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get Mail(){
    return this.formEditar.get( 'mail' );
  }

  get Aboutme(){
    return this.formEditar.get( 'aboutme' );
  }

  onSend(event : Event){
    event.preventDefault;
    this.editarService.editarAboutme(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
