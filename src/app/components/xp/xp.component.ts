import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

  @Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.css']
})
export class XpComponent implements OnInit {

  constructor(private datosPorf:DataService) { }

  mostrarAniadirXp = false;
  mostrarBorrarXp = false;
  xpList:any ;

  ngOnInit(): void {
    this.datosPorf.obtenerDatosExperiencia().subscribe(data => {
      this.xpList = data;
    });
  }


}
