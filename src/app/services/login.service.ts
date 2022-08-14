import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable, BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class UsersService {
  //url = "localhost:8080/api/auth/login";
  url : string = "http://localhost:8080/login";
  currentUserSubject : BehaviorSubject<any>;


  constructor(private http: HttpClient, private ruta: Router) {
    console.log("el auth serv esta corriendo");
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));

  }

  iniciarSesion(credenciales : any): Observable<any>
  {
    return this.http.post(this.url, credenciales).pipe(map(data=> {

      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data);
      this.ruta.navigate(['/portfolio']);
      return data;
    }))
  }

  get usuarioAutenticado(){
      return this.currentUserSubject.value;
  }

}
