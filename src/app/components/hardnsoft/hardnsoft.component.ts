import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-hardnsoft',
  templateUrl: './hardnsoft.component.html',
  styleUrls: ['./hardnsoft.component.css']
})
export class HardnsoftComponent implements OnInit {

  constructor(private datosPorf:DataService, private loginService: UsersService) { }

  mostrarAniadirHNS = false;
  hardnsoftList:any;
  mostrarBorrar= false;
  protected userloged : boolean = this.loginService.userlogedin();

  ngOnInit(): void {
    this.datosPorf.obtenerDatosSkills().subscribe(data => {
      this.hardnsoftList = data;
    });

  }

}
