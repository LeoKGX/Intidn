import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private datosPorf:DataService) { }

  mostrarBorrarProyecto = false;
  mostrarAniadirProyecto = false;
  proyectosList:any ;

  ngOnInit(): void {
    this.datosPorf.obtenerDatosProyectos().subscribe(data => {
      this.proyectosList = data;
    });
  }


}
