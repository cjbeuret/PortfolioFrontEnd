import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  usuariosList: Usuario[] = [];
  
    
  constructor(private formBuilder:FormBuilder,
              private router:Router,
              private sUsuario:UsuarioService
    ) { 

    this.loginForm=this.formBuilder.group(
      {
        username: ['',[Validators.required]],
        password: ['',[Validators.required]],
      }
    )
  }

  ngOnInit(): void{
    this.sUsuario.list().subscribe(
      data=>{
        this.usuariosList=data;
            
    });
  }
  

get Username(){
  return this.loginForm.get('username');
}

get Password() {
  return this.loginForm.get('password');
}
 
onEnviar(event: Event){
  if (this.loginForm.value.password===this.usuariosList[0].password && 
    
    this.loginForm.value.username===this.usuariosList[0].username)
  {    
    localStorage.setItem('modoLogin','logueado');
    alert('Iniciaste sesión correctamente');
    this.router.navigate(['/indice']);
  }
  else {
    alert('Datos invalidos. Vuelve a intentar');
    this.router.navigate(['/indice']);
     }
}
}
