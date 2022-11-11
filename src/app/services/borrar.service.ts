import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrarService {

  urlBorrarHNS = "https://app-portfolio-lkg.herokuapp.com/borrar/hns"
  urlBorrarProyecto = "https://app-portfolio-lkg.herokuapp.com/borrar/proyecto"
  urlBorrarAcercaDeMi=  "https://app-portfolio-lkg.herokuapp.com/borrar/acercademi"

  constructor(private http: HttpClient) { }



  borrarHNS(datos: any) : Observable<any>{
    return this.http.put(this.urlBorrarHNS, datos).pipe(map(data=> {
      return data;
    }));
  }

  borrarProyecto(datos: any) : Observable<any> {
    return this.http.put(this.urlBorrarProyecto, datos).pipe(map(data=> {
      return data;
    }));
  }

  borrarAcercaDeMi(datos: any) : Observable<any> {
    return this.http.put(this.urlBorrarAcercaDeMi, datos).pipe(map(data=> {
      return data;
    }));
  }

}
