import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hardnsoft',
  templateUrl: './hardnsoft.component.html',
  styleUrls: ['./hardnsoft.component.css']
})
export class HardnsoftComponent implements OnInit {

  constructor(private datosPorf:DataService) { }

  hardnsoftList:any;

  ngOnInit(): void {
    this.datosPorf.obtenerDatos().subscribe(data => {
      this.hardnsoftList = data.hardnsoft;
    });

  }

}
