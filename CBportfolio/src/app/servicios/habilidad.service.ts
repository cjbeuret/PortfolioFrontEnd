import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  habURL= 'http://localhost:8080/habilidad/' //si pongo barra al final no debo ponerla en cada método del Controller

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habURL + 'lista');
  }

  public getById(id:number):Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habURL + `detalle/${id}`); //o this.expURL + 'buscar'+ '${id}' 
  }

  public create(habilidad: Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.habURL + 'alta', habilidad); //le pasamos el objeto experiencia para crear nuevo registro en BD
  } //ojo en experiencia puse tilde grave y funciona

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habURL + `baja/${id}`);
  }

  public edit(habilidad: Habilidad):Observable<any>{
    return this.httpClient.put<any>(this.habURL + 'edicion', habilidad);
  }

  public editById (id:number, habilidad: Habilidad): Observable<any>{
    return this.httpClient.put<any>(this.habURL + `edicion/${id}`, habilidad);
  } 

}
