import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

  @Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.css']
})
export class XpComponent implements OnInit {

  constructor(private datosPorf:DataService) { }

  proyectosList:any ;
  techList:any;

  ngOnInit(): void {
    this.datosPorf.obtenerDatosProyectos().subscribe(data => {
      this.proyectosList = data;
    });


  }


}
