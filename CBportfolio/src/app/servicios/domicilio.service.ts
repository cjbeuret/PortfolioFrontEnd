import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domicilio } from '../model/domicilio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomicilioService {
  domURL= 'http://localhost:8080/domicilio/' //si pongo barra al final no debo ponerla en cada método del Controller


  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Domicilio[]> {
    return this.httpClient.get<Domicilio[]>(this.domURL + 'lista');
  }

  public getById(id:number):Observable<Domicilio> {
    return this.httpClient.get<Domicilio>(this.domURL + `detalle/${id}`); //o this.expURL + 'buscar'+ '${id}' 
  }

  public create(domicilio: Domicilio):Observable<any>{
    return this.httpClient.post<any>(this.domURL + `alta`, domicilio); //le pasamos el objeto experiencia para crear nuevo registro en BD
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.domURL + `baja/${id}`);
  }

  public edit(domicilio: Domicilio):Observable<any>{
    return this.httpClient.put<any>(this.domURL + `edicion`, domicilio);
  }

  public editById (id:number, domicilio: Domicilio): Observable<any>{
    return this.httpClient.put<any>(this.domURL + `edicion/${id}`, domicilio);
  } 

}
