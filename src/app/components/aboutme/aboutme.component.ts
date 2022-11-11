import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private datosPorf:DataService) { }

  miPort:any;
  mostrarEditarAboutMe = false;
  mostrarAniadirAboutMe = false;

  ngOnInit(): void {
    this.datosPorf.obtenerDatosPersona().subscribe(data => {
      this.miPort = (data[0]);
    });

  }

}
