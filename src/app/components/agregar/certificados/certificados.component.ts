import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditarService } from 'src/app/services/editar.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  formEditar: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private editarService: EditarService,
    ) {
    this.formEditar = this.formbuilder.group(
          {
            title:['',[Validators.required]],
            company:['',[Validators.required]],
            issued:['',[Validators.required]],
            expdate:['',[Validators.required]],
            certid:['',[Validators.required]],
            img:['',[Validators.required]]
          }
        )
        }

  ngOnInit(): void {
  }

  get Title(){
    return this.formEditar.get( 'title' );
  }

  get Company(){
    return this.formEditar.get( 'company' );
  }

  get Issued(){
    return this.formEditar.get( 'issued' );
  }

  get Expdate(){
    return this.formEditar.get( 'expdate' );
  }

  get Certid(){
    return this.formEditar.get( 'certid' );
  }

  get Img(){
    return this.formEditar.get( 'img' );
  }

  onSend(event : Event){
    event.preventDefault;
    this.editarService.aniadirCert(this.formEditar.value ).subscribe(()=> {
      window.location.reload();
    });
  }
}
