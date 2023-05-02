import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  eduURL= 'http://localhost:8080/educacion/' //si pongo barra al final no debo ponerla en cada método del Controller


  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'lista');
  }

  public getById(id:number):Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduURL + `detalle/${id}`); //o this.expURL + 'buscar'+ '${id}' 
  }

  public create(educacion: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.eduURL + `alta`, educacion); //le pasamos el objeto experiencia para crear nuevo registro en BD
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `baja/${id}`);
  }

  public edit(educacion: Educacion):Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `edicion`, educacion);
  }

  public editById (id:number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `edicion/${id}`, educacion);
  } 

}
