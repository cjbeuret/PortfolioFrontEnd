import { Injectable } from '@angular/core';
//suscribirse a los datos y q reciba rta asincrona
import { Observable } from 'rxjs';
//hacer peticiones y CRUD
import { HttpClient } from '@angular/common/http';

//injectable significa q lo vamos a poder usar en otro lugar; permite q el servicio sea inyetado en los componentes
@Injectable({
  providedIn: 'root'
})

//es una clase que tiene un constructor adentro
export class DataService {
  //crea una variable para conexión a la API
  url:string="http://localhost:8080/";     
  
  /*si no funciona poner directamente esta http://localhost:8080/persona/lista
  en ese caso sacar "persona" del return */

  // siempre usar un alias. http = alias. Es el alias de HttpClient. Podría poner otro
  constructor(private http:HttpClient) { }

  //metodo observable que devuelve datos
  obtenerDatos():Observable<any>  
  {
    //acá reemplaza la conexión al JSON x conexión a la API
    //en el metodo GET llama a la API persona (tengo 1 x cada compoentne del Backend)
    return this.http.get<any>(this.url+"persona");
    
  }  
    
    
    /* ESTO ES LO DEL JSON - no borrar hasta q la conexión a las APIs esté ok
      constructor(private http:HttpClient) { }

      //metodo observable que devuelve datos
      obtenerDatos():Observable<any> 
      {
    
      //retorno de datos utilizando el metodo get de HttpClient q llama a la base de datos JSON o a una URL
      return this.http.get<any>('./assets/data/data.json');
  
      //acá podría poner un callback p ver la opción de problema de conexión del servidor
      }
    */
  
}
