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

  ngOnInit(): void {
  }

  onClic(){
    console.log("cerrando sesion");
    this.loginService.logout( );
    this.ruta.navigate(['/login']);
  }
}
