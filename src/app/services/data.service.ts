import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlpersona:string = "https://app-portfolio-lkg.herokuapp.com/persona";
  urlcertificados:string = "https://app-portfolio-lkg.herokuapp.com/certificados";
  urleducacion:string = "https://app-portfolio-lkg.herokuapp.com/educacion";
  urlskills:string = "https://app-portfolio-lkg.herokuapp.com/skill";
  urlproyectos:string = "https://app-portfolio-lkg.herokuapp.com/proyectos";


  constructor(private http:HttpClient) { }

  obtenerDatosPersona():Observable<any>{
    return this.http.get(this.urlpersona);
  }

  obtenerDatosCertificados():Observable<any>{
    return this.http.get(this.urlcertificados);
  }

  obtenerDatosEducacion():Observable<any>{
    return this.http.get(this.urleducacion);
  }

  obtenerDatosSkills():Observable<any>{
    return this.http.get(this.urlskills);
  }

  obtenerDatosProyectos():Observable<any>{
    return this.http.get(this.urlproyectos);
  }


}
