import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
//import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  //Creamos un formulario, especificamos q es FormGroup, q es el q vamos a enlazar con nuestro template
  loginForm:FormGroup;

  usuariosList: Usuario[] = [];
   
  //Como FormBuilder es un servicio lo inyectamos en el constructor
  constructor(private formBuilder: FormBuilder,
    private sUsuario:UsuarioService, 
    private router:Router
    ) {
    //inicializamos el formulario utilizando el servicio de FormBuilder 
    this.loginForm= this.formBuilder.group(
      {
        //debemos especificar el grupo de formControls (controles p/el form de login)
        //respetar el modelo del Body del JSON 
        //los formsControl dentro del FormGrup deben tener los mismos nombres q el modelo
        
        username: ['',[Validators.required,Validators.minLength(10)]],
        //email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]],
        
      })
  }

  ngOnInit(): void {
    this.sUsuario.list().subscribe(
      data=>{
        this.usuariosList=data;            
    });
  }

  get Usename() {
    return this.loginForm.get("username");
  }

  /*get Mail() {
    return this.loginForm.get("email");
  }*/

  get Password() {
    return this.loginForm.get("password");
  }

  get UsernameInvalid() {
    return this.Usename?.touched && !this.Usename?.valid;
  }

  /*
  get MailValid() {
    return false
  }
  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }*/

  get PasswordInvalid() {
    return this.Password?.touched && !this.Password?.valid;
  }

 
  onEnviar(event: Event){
    if (this.loginForm.value.password===this.usuariosList[0].password && 
      
      this.loginForm.value.username===this.usuariosList[0].username)
    {    
      localStorage.setItem('modoLogin','logueado');
      alert('Iniciaste sesión correctamente');
      window.location.reload();
      //this.router.navigate(['/indice']);
    }
    else {
      alert('Datos invalidos. Vuelve a intentar');
      this.router.navigate(['/indice']);
      }
  }
}  


/*
  onEnviar(event: Event) {
    
    //Detenemos la propagacion o ejecucion del comportamiento submit de un form
    event.preventDefault;
    
    //llamamos al metodo del servicio y le enviamos las credenciales q están def en "value" del form, xq usamos forms reactivos
    this.autenticacionService.iniciarSesion(this.loginForm.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      
      //si el iniciar sesión me devuelve los datos signif q está OK
      //debemos redirigir al usuario a la ruta del porfolio p edicion (inyecto servicio Router)
      //this.ruta.navigate(['/indice']) --> está adentro de la llave xq en el ejemplo solo se ve el porfolio si está loggeado
    })
    //losacamos de la llave xq en nuestro caso el porfolio se ve siempre y lo q cambia es la posibilidad de editarlo 
    this.router.navigate(['/indice']);
    
  }

 

/* onEnviar ORIGINAL

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }
*/





  //OJO TENGO OTRO MÉTODO LOGIN EN EL SERVICIO DE AUTENTICACIÓN! no sé si va acá o si esto está pasable
  /*login() {
    let userLogged = 'invalid_form';
    console.log('Valores del form --> ', this.loginForm.value);
    if(this.loginForm.valid) {
      if (this.loginForm.value.email === 'ceci@ceci.com' && this.loginForm.value.password === '12345678') {
        userLogged = 'login_valid';
      } else {
        userLogged = 'login_invalid';
      }
      console.log('Respuesta del servicio de login --> ', userLogged);
    }

    return userLogged;
  }*/
  

