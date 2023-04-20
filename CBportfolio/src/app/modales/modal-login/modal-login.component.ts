import { Component, OnInit } from '@angular/core';
//importamos la librerias de formularios que vamos a necesitar
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  public form: FormGroup;

  //Como FormBuilder es un servicio lo inyectamos en el constructor
  constructor(private formBuilder: FormBuilder, private autenticacionService: AuthService, private ruta:Router) {
    //Creamos un formulario, especificamos q es FormGroup, q es el q vamos a enlazar con nuestro template
    form:FormGroup;
    //inicialiazmos el formulario utilizando el servicio de FormBuilder 
    this.form= this.formBuilder.group(
      {
        //debemos especificar el grupo de formControls (controles p/el formu de login)
        //respetar el modelo del Body del JSON 
        //los formsControl dentro del FormGrup deben tener los mismos nombres q el modelo
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          //FALTAN los datos. Los obtiene del Postman
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["67657575eececc34"]
        })        
      }
    )
  }

  ngOnInit() {}

  get Mail() {
    return this.form.get("email");
  }

  get Password() {
    return this.form.get("password");
  }

  /*get PasswordInvalid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  //get MailValid() {
  //  return false
  //}

  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }*/

  //metodo botón enviar(usa el servicio p enviar creddenciales a API)
  //recibe como parámetro un evento, p llamar al metodo preventDefault
    onEnviar(event: Event) {
    
      //Detenemos la propagacion o ejecucion del comportamiento submit de un form
    event.preventDefault;
    
    //llamamos al metodo del servicio y le enviamos las credenciales q están def en "value" del form, xq usamos forms reactivos
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      
      //si el iniciar sesión me devuelve los datos signif q está OK
      //debemos redirigir al usuario a la ruta del porfolio p edicion (inyecto servicio Router)
      this.ruta.navigate(['/indice'])
    })
    }
}
