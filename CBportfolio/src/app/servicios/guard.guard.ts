import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  //debemos inyectar el consturctos con el servicio de autenticacion 
  constructor(private autenticacionServicio: AuthService, private rutas:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      //identificamos al usuario autenticado
      let currentUser = this.autenticacionServicio.UsuarioAutenticado;
      
      //si el usuario existe, tiene datos, y además tiene asociado un accessToken, retorna TRUE
      //if(currentUser && currentUser.accessToken) --> no iría lo del token
      if(currentUser && currentUser.id){
        return true;
      } 
      else {
        //si no es usuario no está lo redirecciono al formulario de iniciar sesión
        //inyectar al constructor el servicio de rutas para navegar
        
        /*this.rutas.navigate(['/login']); //  (['/iniciar-sesion'])
        return false; 
        (así estaba en master class, xq solo podias ver el porfolio si tenías sesion iniciada)
        */
        return true;
      }
  }
  
}
