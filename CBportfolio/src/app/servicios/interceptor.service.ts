import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
//p q el servicio se comporte como Interceptor debo impl interfaz HttpInterceptor
export class InterceptorService implements HttpInterceptor {

  //inyecto Servicio Autenticacion en contructo p poder usarlo
  constructor(private autenticacionSevicio: AuthService) { }
  
  //la interfaz me obliga a implementqar el metodo intercept
  //intercepta el request, le agrega el token y luego deja q siga su curso
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    //variable para acceder a la propiedad UsuarioAutenticado q nos devuelve el último estado
    var currentUser=this.autenticacionSevicio.UsuarioAutenticado;
    //verificar si el currentUser tiene el token almacenado
  
    if(currentUser && currentUser.accessToken)
    {
      //si el valor existe, clonamos el request p poder setearle en el encabezado el token
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      })
    }
    //envia a la consola p ver si funciona nuestro interceptor
    console.log("interceptor corriendo" + JSON.stringify(currentUser));
    //al final tiene q tener un return. Usa el manejador (handle) p q le permita seguir su curso al request
    return next.handle(req);
  }
}
