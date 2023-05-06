import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  url="http://localhost:8080/usuario/list";
  
  constructor(http:HttpClient) { }
}
