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

  aboutmeList:any;
  mostrarAniadirAboutMe = false;
  mostrarBorrarAcerca= false;

  ngOnInit(): void {
    this.datosPorf.obtenerDatosAboutMe().subscribe(data => {
      this.aboutmeList = data;
    });

  }

}
