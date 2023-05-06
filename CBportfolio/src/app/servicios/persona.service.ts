import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  perURL= 'http://localhost:8080/persona/' //si pongo barra al final no debo ponerla en cada método del Controller

  constructor(private httpClient:HttpClient) { }

  public obtenerDatos():Observable<any>  {
    return this.httpClient.get<any>(this.perURL);
  }

 /*
 El BACKEND tiene este método, pero en el FRONT está en el auth.service.ts
 
 @PostMapping ("login")
  public Persona loginPersona (@RequestBody Persona pers){
      return persoServ.loginPersona(pers.getEmail(), pers.getPassword());
  }
  */
 
  public list(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.perURL + 'lista');
  }

  /*
  public getPersona(): Observable<Persona[]> {
    return this.httpClient.get<Persona>(this.perURL + 'traer/perfil');
  }
  */

  public getById(id:number):Observable<Persona> {
    return this.httpClient.get<Persona>(this.perURL + `detalle/${id}`); //o this.expURL + 'buscar'+ '${id}' 
  }

  public create(persona: Persona):Observable<any>{
    return this.httpClient.post<any>(this.perURL + `alta`, persona); //le pasamos el objeto experiencia para crear nuevo registro en BD
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.perURL + `baja/${id}`);
  }

  public edit(persona: Persona):Observable<any>{
    return this.httpClient.put<any>(this.perURL + `edicion`, persona);
  }

  public editById (id:number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.perURL + `edicion/${id}`, persona);
  } 
}
