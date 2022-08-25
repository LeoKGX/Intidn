import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-hnsskills',
  templateUrl: './hnsskills.component.html',
  styleUrls: ['./hnsskills.component.css']
})
export class HnsskillsComponent implements OnInit {

  formEditar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private editarService: EditarService,
    ) {
    this.formEditar = this.formbuilder.group(
          {
            skill:['',[Validators.required]],
            porc:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get Skill(){
    return this.formEditar.get( 'skill' );
  }

  get Porc(){
    return this.formEditar.get( 'porc' );
  }

  onSend(event : Event){
    event.preventDefault;
    let x = this.formEditar.value.porc + "%";
    this.formEditar.value.porc = x;
    console.log(this.formEditar.value)
    this.editarService.aniadirHNS(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
