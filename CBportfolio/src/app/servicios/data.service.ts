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
  
  // siempre usar un alias. http = alias. Es el alias de HttpClient. Podría poner otro
  constructor(private http:HttpClient) { }

  //metodo observable que devuelve datos
  obtenerDatos():Observable<any> {
    
    //retorno de datos utilizando el metodo get de HttpClient q llama a la base de datos JSON o a una URL
    return this.http.get('./assets/data/data.json');
    
    //acá podría poner un callback p ver la opción de problema de conexión del servidor
  }
}