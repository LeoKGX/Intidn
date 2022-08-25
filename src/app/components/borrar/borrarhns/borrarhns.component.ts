import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrarService } from 'src/app/services/borrar.service';

@Component({
  selector: 'app-borrarhns',
  templateUrl: './borrarhns.component.html',
  styleUrls: ['./borrarhns.component.css']
})
export class BorrarhnsComponent implements OnInit {

  formBorrar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private borrarService: BorrarService,
    ) {
    this.formBorrar = this.formbuilder.group(
          {
            skill:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get Skill(){
    return this.formBorrar.get( 'skill' );
  }



  onSend(event : Event){
    event.preventDefault;
    console.log(this.formBorrar.value);
    this.borrarService.borrarHNS(this.formBorrar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
