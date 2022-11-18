import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/login.service';

  @Component({
  selector: 'app-xp',
  templateUrl: './xp.component.html',
  styleUrls: ['./xp.component.css']
})
export class XpComponent implements OnInit {

  constructor(private datosPorf:DataService, private loginService: UsersService) { }

  mostrarAniadirXp = false;
  mostrarBorrarXp = false;
  xpList:any;
  protected userloged : boolean = this.loginService.userlogedin();

  ngOnInit(): void {
    this.datosPorf.obtenerDatosExperiencia().subscribe(data => {
      this.xpList = data;
    });
  }


}
