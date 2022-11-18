import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard{ //implements CanActivate {

  constructor(private loginservice: UsersService, private ruta: Router){

  }
/*
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let currentUser = this.loginservice.usuarioAutenticado;
      if (currentUser && currentUser.accessToken){
        return true;
      }else{
        this.ruta.navigate(['/login']);
        return false;
      }
  }
*/
}
