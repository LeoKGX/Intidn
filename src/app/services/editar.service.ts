import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class EditarService {


  urlFotoPerfil = "https://app-portfolio-lkg.herokuapp.com/update/persona/profileimg"
  urlAniadirEdu = "https://app-portfolio-lkg.herokuapp.com/crear/edu"
  urlAniadirCert = "https://app-portfolio-lkg.herokuapp.com/crear/cert"
  urlAniadirHNS = "https://app-portfolio-lkg.herokuapp.com/crear/hns"
  urlAniadirXp = "https://app-portfolio-lkg.herokuapp.com/crear/xp"
  urlEditarAboutme = "https://app-portfolio-lkg.herokuapp.com/update/persona/aboutme"

  constructor(private http: HttpClient) { }

  editarAboutme(datos: any) : Observable<any> {
    return this.http.put(this.urlEditarAboutme, datos).pipe(map(data=> {
      return data;
    }));
  }

  editarFotoPerfil(datos: any) : Observable<any>{
    return this.http.put(this.urlFotoPerfil, datos).pipe(map(data=> {
      return data;
    }));
  }

  aniadirEdu(datos: any) : Observable<any>{
    return this.http.post(this.urlAniadirEdu, datos).pipe(map(data=> {
      return data;
    }));
  }


  aniadirCert(datos: any) : Observable<any>{
    return this.http.post(this.urlAniadirCert, datos).pipe(map(data=> {
      return data;
    }));
  }

  aniadirHNS(datos: any) : Observable<any>{
    return this.http.post(this.urlAniadirHNS, datos).pipe(map(data=> {
      return data;
    }));
  }

  aniadirXp(datos: any) : Observable<any>{
    return this.http.post(this.urlAniadirXp, datos).pipe(map(data=> {
      return data;
    }));
  }





}
