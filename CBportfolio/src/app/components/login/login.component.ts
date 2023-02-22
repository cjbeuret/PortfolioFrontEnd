import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  Login(){
    //El servicio authService.login redirecciona en caso de inicio de sesión pósitivo
    this.authService.login(this.email, this.password)
  }
  ngOnInit() { }
}
