import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-infocontacto',
  templateUrl: './infocontacto.component.html',
  styleUrls: ['./infocontacto.component.css']
})
export class InfocontactoComponent implements OnInit {

  infoContacto:any;
  mostrarEditarInfoContacto = false;

  constructor(private datosPorf: DataService) { }

  ngOnInit(): void {
    this.datosPorf.obtenerDatosPersona().subscribe(data => {
      this.infoContacto = (data[0]);
    });
  }
}
