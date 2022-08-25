import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hardnsoft',
  templateUrl: './hardnsoft.component.html',
  styleUrls: ['./hardnsoft.component.css']
})
export class HardnsoftComponent implements OnInit {

  constructor(private datosPorf:DataService) { }
  mostrarAniadirHNS = false;
  hardnsoftList:any;
  mostrarBorrar= false;


  ngOnInit(): void {
    this.datosPorf.obtenerDatosSkills().subscribe(data => {
      this.hardnsoftList = data;
    });

  }

}
