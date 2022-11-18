import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-infocontacto',
  templateUrl: './infocontacto.component.html',
  styleUrls: ['./infocontacto.component.css']
})
export class InfocontactoComponent implements OnInit {

  constructor(private datosPorf: DataService, private loginService: UsersService) { }

  infoContacto:any;
  mostrarEditarInfoContacto = false;
  protected userloged : boolean = this.loginService.userlogedin();

  ngOnInit(): void {
    this.datosPorf.obtenerDatosPersona().subscribe(data => {
      this.infoContacto = (data[0]);
    });
  }
}
