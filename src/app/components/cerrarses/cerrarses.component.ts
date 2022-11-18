import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cerrarses',
  templateUrl: './cerrarses.component.html',
  styleUrls: ['./cerrarses.component.css']
})
export class CerrarsesComponent implements OnInit {

  constructor(private loginService: UsersService, private ruta:Router) { }

  protected userloged : boolean = this.loginService.userlogedin();

  ngOnInit(): void {
    this.ruta.routeReuseStrategy.shouldReuseRoute = () => { return false; };
  }

  onClicCerrar(){
    this.loginService.logout();
    window.location.reload();
    this.ruta.navigate(['/portfolio']);
  }

  onClicIniciar(){
    this.loginService.logout( );
    this.ruta.navigate(['/login']);
  }
}
