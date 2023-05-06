import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL= 'http://localhost:8080/experiencia/' //si pongo barra al final no debo ponerla en cada método del Controller
  
  httpOptions = {
    headers : ({'Content-Type': 'application/json'})
    };

  constructor(private httpClient:HttpClient) { }
  
    public obtenerDatos():Observable<any>  {
      return this.httpClient.get<any>(this.expURL);
    }
  
    public list(): Observable<Experiencia[]> {
      return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
    }
    
    public getById(id:number):Observable<Experiencia> {
      return this.httpClient.get<Experiencia>(this.expURL + `detalle/${id}`); //o this.expURL + 'buscar'+ '${id}' 
    }

    public create(nuevaExpe: Experiencia):Observable<any>{
      return this.httpClient.post<any>(this.expURL + 'alta', nuevaExpe); //le pasamos el objeto experiencia para crear nuevo registro en BD
    }

    //si no camina el otro probar este
    /*public create(nuevaExperiencia: Experiencia):Observable<any>{
      console.log(JSON.stringify(nuevaExperiencia));
         
      return this.httpClient.post<any>(this.expURL + 'alta', JSON.stringify(nuevaExperiencia),this.httpOptions);
      }*/

    public delete(id: number): Observable<Experiencia> {
      return this.httpClient.delete<Experiencia>(this.expURL + `baja/${id}`);
    }

    public edit(expeEdit: Experiencia):Observable<Experiencia>{
      return this.httpClient.put<Experiencia>(this.expURL + 'edicion', expeEdit);
    }

    /*public editById (id:number, experiencia: Experiencia): Observable<any>{
      return this.httpClient.put<any>(this.expURL + `edicion/${id}`, experiencia);
    }*/
}