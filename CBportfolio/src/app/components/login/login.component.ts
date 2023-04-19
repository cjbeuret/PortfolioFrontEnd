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

  constructor(private router:Router, private authService: AuthService) {}

  login(){
    //El servicio authService.login redirecciona en caso de inicio de sesión pósitivo
    this.router.navigate(['/login'])
    this.authService.login(this.email, this.password)
  }
  ngOnInit() { }
}
