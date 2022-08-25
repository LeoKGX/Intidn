import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrarService {


  urlBorrarHNS = "https://app-portfolio-lkg.herokuapp.com/borrar/hns"

  constructor(private http: HttpClient) { }



  borrarHNS(datos: any) : Observable<any>{
    return this.http.put(this.urlBorrarHNS, datos).pipe(map(data=> {
      return data;
    }));
  }





}
