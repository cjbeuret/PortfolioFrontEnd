import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idioma } from '../model/idioma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {
  idiURL= 'http://localhost:8080/idioma/' //si pongo barra al final no debo ponerla en cada método del Controller

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Idioma[]> {
    return this.httpClient.get<Idioma[]>(this.idiURL + 'lista');
  }

  public getById(id:number):Observable<Idioma> {
    return this.httpClient.get<Idioma>(this.idiURL + `detalle/${id}`); //o this.expURL + 'buscar'+ '${id}' 
  }

  public create(idioma: Idioma):Observable<any>{
    return this.httpClient.post<any>(this.idiURL + `alta`, idioma); //le pasamos el objeto experiencia para crear nuevo registro en BD
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.idiURL + `baja/${id}`);
  }

  public edit(idioma: Idioma):Observable<any>{
    return this.httpClient.put<any>(this.idiURL + `edicion`, idioma);
  }

  public editById (id:number, idioma: Idioma): Observable<any>{
    return this.httpClient.put<any>(this.idiURL + `edicion/${id}`, idioma);
  } 
}
