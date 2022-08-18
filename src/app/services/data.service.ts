import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlpersona:string = "http://localhost:8080/persona";
  urlcertificados:string = "http://localhost:8080/certificados";
  urleducacion:string = "http://localhost:8080/educacion";
  urlskills:string = "http://localhost:8080/skill";
  urlproyectos:string = "http://localhost:8080/proyectos";


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
