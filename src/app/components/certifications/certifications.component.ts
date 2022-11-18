import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { UsersService } from 'src/app/services/login.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  constructor(private datosPorf:DataService, private loginService: UsersService) { }

  mostrarAniadirCert = false;
  certificationsList:any;
  protected userloged : boolean = this.loginService.userlogedin();

  ngOnInit(): void {
    this.datosPorf.obtenerDatosCertificados().subscribe(data => {
      this.certificationsList = data;
    });

  }

}
