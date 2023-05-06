import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Red } from '../model/red';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  redURL= 'http://localhost:8080/red/' //si pongo barra al final no debo ponerla en cada método del Controller

  constructor(private httpClient:HttpClient) { }

  public obtenerDatos():Observable<any>  {
    return this.httpClient.get<any>(this.redURL);
  }
  public list(): Observable<Red[]> {
    return this.httpClient.get<Red[]>(this.redURL + 'lista');
  }

  public getById(id:number):Observable<Red> {
    return this.httpClient.get<Red>(this.redURL + `detalle/${id}`); //o this.expURL + 'buscar'+ '${id}' 
  }

  public create(red: Red):Observable<any>{
    return this.httpClient.post<any>(this.redURL + `alta`, red); //le pasamos el objeto experiencia para crear nuevo registro en BD
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.redURL + `baja/${id}`);
  }

  public edit(red: Red):Observable<any>{
    return this.httpClient.put<any>(this.redURL + `edicion`, red);
  }

  public editById (id:number, red: Red): Observable<any>{
    return this.httpClient.put<any>(this.redURL + `edicion/${id}`, red);
  } 

}
