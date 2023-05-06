import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuURL:string="http://localhost:8080/usuario/";


  constructor(private http:HttpClient) { }

  public list():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuURL + 'lista');
    };

  public getById(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(this.usuURL + `detalle/${id}`);
    };
}
