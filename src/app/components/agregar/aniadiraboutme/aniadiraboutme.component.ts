import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-aniadiraboutme',
  templateUrl: './aniadiraboutme.component.html',
  styleUrls: ['./aniadiraboutme.component.css']
})
export class AniadiraboutmeComponent implements OnInit {
  formEditar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private editarService: EditarService,
    ) {
    this.formEditar = this.formbuilder.group(
          {
            mail:['',[Validators.required]],
            about:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get Mail(){
    return this.formEditar.get( 'mail' );
  }

  get About(){
    return this.formEditar.get( 'about' );
  }

  onSend(event : Event){
    event.preventDefault;
    this.editarService.aniadirAboutMe(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
