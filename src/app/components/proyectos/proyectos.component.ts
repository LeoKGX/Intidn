import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private datosPorf:DataService, private loginService: UsersService) { }

  mostrarBorrarProyecto = false;
  mostrarAniadirProyecto = false;
  proyectosList:any ;
  protected userloged : boolean = this.loginService.userlogedin();

  ngOnInit(): void {
    this.datosPorf.obtenerDatosProyectos().subscribe(data => {
      this.proyectosList = data;
    });
  }


}
