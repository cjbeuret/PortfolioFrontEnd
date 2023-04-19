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

  //Inyectamos en el constructo el formBuilder
  constructor(private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['',[Validators.required, Validators.email]],
    })
  }

  ngOnInit() {}

  get Password() {
    return this.form.get("password");
  }

  get PasswordInvalid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get Mail() {
    return this.form.get("email");
  }

  //get MailValid() {
  //  return false
  //}

  get MailInvalid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onEnviar(event: Event) {
    //Detenemos la propagacion o ejecucion del comportamiento submit de un form
    event.preventDefault;

    if (this.form.valid) {
      //llamamos a nuestro servicio para enviar los datos al servidor
      //tb podriamos ejecutar alguna logica extra
      alert("perfecto ¡Enviar formulario!")
    }else{
      //Corremos todas las validaciones p q se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
  }  

 // ngOnInit(): void {
   // this.form=this.formBuilder.group({    no se si esto va acá o arriba
   //   mail:['',[]],
   //   password:['',[]],
  //})
//}

  //submit():any{
    //falta definir este método. De eso depende que pueda poner submit arriba
  //}
}
