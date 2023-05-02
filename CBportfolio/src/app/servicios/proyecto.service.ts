import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proyecto } from '../model/proyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  proyURL= 'http://localhost:8080/proyecto/' //si pongo barra al final no debo ponerla en cada método del Controller

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proyURL + 'lista');
  }

  public getById(id:number):Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyURL + `detalle/${id}`); //o this.expURL + 'buscar'+ '${id}' 
  }

  public create(proyecto: Proyecto):Observable<any>{
    return this.httpClient.post<any>(this.proyURL + `alta`, proyecto); //le pasamos el objeto experiencia para crear nuevo registro en BD
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyURL + `baja/${id}`);
  }

  public edit(proyecto: Proyecto):Observable<any>{
    return this.httpClient.put<any>(this.proyURL + `edicion`, proyecto);
  }

  public editById (id:number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.proyURL + `edicion/${id}`, proyecto);
  } 
}
