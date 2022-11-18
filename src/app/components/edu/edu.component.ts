import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {

  constructor(private datosPorf:DataService, private loginService: UsersService) { }

  educacionList:any;
  mostrarAniadirEdu = false;
  protected userloged : boolean = this.loginService.userlogedin();

  ngOnInit(): void {
    this.datosPorf.obtenerDatosEducacion().subscribe(data => {
      this.educacionList = data;
    });

  }

}
