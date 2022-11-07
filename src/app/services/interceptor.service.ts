import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UsersService } from './login.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor(private loginservice: UsersService, private ruta: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>>
  {
    var currentUser = this.loginservice.usuarioAutenticado;

    if ( currentUser && currentUser.accessToken){
      console.log("interceptor");
      req = req.clone ({
        setHeaders : {
          Authorization: 'Bearer '+currentUser.accessToken
        }
      })
    }

    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
          this.loginservice.logout();
          this.ruta.navigate(['/login']);
      }
      const error = err.error.message || err.statusText;
          return throwError(error);
  }));
  }
}

