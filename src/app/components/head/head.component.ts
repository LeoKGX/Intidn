import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private datosPorf:DataService) { }

  miPort:any;

  ngOnInit(): void {
    this.datosPorf.obtenerDatos().subscribe(data => {
      this.miPort = (data[0]);
    });

  }

}
