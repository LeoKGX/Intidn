import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  miPort:any;

  public mostrarDatos = false;
  protected mostrarEditarFotoPerfil = false;
  public mostrarEditarInfoPersonal = false;
  protected userloged : boolean = this.loginService.userlogedin();

  ngOnInit(): void {
    this.datosPorf.obtenerDatosPersona().subscribe(data => {
      this.miPort = (data[0]);
    });

  }

  constructor(private datosPorf:DataService,
              private loginService: UsersService
             ) {

             }


}
