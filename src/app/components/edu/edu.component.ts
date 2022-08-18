import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  constructor(private datosPorf:DataService) { }

  educacionList:any;

  ngOnInit(): void {
    this.datosPorf.obtenerDatosEducacion().subscribe(data => {
      this.educacionList = data;
    });

  }

}
