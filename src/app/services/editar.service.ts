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
  urlAniadirProyecto = "https://app-portfolio-lkg.herokuapp.com/crear/proyecto"
  urlAniadirAboutMe = "https://app-portfolio-lkg.herokuapp.com/crear/aboutme"
  urlEditarAboutme = "https://app-portfolio-lkg.herokuapp.com/update/persona/aboutme"
  urlEditarInfoContacto = "https://app-portfolio-lkg.herokuapp.com/update/persona/contacto"
  urlEditarInfoPersonal = "https://app-portfolio-lkg.herokuapp.com/update/persona/personal"

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

  aniadirAboutMe(datos: any) : Observable<any>{
    return this.http.put(this.urlAniadirAboutMe, datos).pipe(map(data=> {
      return data;
    }));
  }

  aniadirProyecto(datos: any) : Observable<any>{
    return this.http.put(this.urlAniadirProyecto, datos).pipe(map(data=> {
      return data;
    }));
  }

  editarInfoContacto(datos: any) : Observable<any> {
    console.log("editando info contacto");
    return this.http.put(this.urlEditarInfoContacto, datos).pipe(map(data=> {
      return data;
    }));
  }

  editarInfoPersonal(datos: any) : Observable<any> {
    console.log("editando info personal");
    return this.http.put(this.urlEditarInfoPersonal, datos).pipe(map(data=> {
      return data;
    }));
  }


}
