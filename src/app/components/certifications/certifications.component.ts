import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  constructor(private datosPorf:DataService) { }

  certificationsList:any;

  ngOnInit(): void {
    this.datosPorf.obtenerDatos().subscribe(data => {
      this.certificationsList = data.certifications;
    });

  }

}
