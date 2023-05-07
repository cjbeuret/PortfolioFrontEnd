import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Red } from 'src/app/model/red';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-modal-redes-add',
  templateUrl: './modal-redes-add.component.html',
  styleUrls: ['./modal-redes-add.component.css']
})
export class ModalRedesAddComponent implements OnInit {
    
  redAddForm: FormGroup;
  
  //id_red: number; 
  nombreRed : string='';
  span : string='';
  url : string='';
  id_persona : number=1; //esto no sé si va

  constructor(
    private formBuilder: FormBuilder, 
    private sRed: RedService, 
    private router:Router){
    //Creamos el grupo de controles p el formulario
      this.redAddForm= this.formBuilder.group(
        {
          nombreRed: ['',[Validators.required]],
          span: ['',[Validators.required]], 
          url:['',[Validators.required]],
          id_persona: [1],
        }
      )
    }

  //Declarar para las validaciones
  get NombreRed(){
    return this.redAddForm.get("nombreRed");
  }
  get Span(){
    return this.redAddForm.get("span");
  }
  get Url(){
    return this.redAddForm.get("url");
  }
  
  //Validaciones
  get NombreRedValid(){
    return this.NombreRed?.touched && !this.NombreRed.valid;
  }
  get SpanjeValid(){
    return this.Span?.touched && !this.Span.valid;
  }
  get UrlValid(){
    return this.Url?.touched && !this.Url.valid;
  }

  ngOnInit(): void {}

  onCreate():void {
    //crea una ctte experiencia y llama el metodo create del servicio
    const nuevaRed = new Red (0, this.nombreRed, this.span, this.url, this.id_persona);
      
      console.log(nuevaRed)
      
      this.sRed.create(nuevaRed).subscribe(
        data => {
          alert("Nueva Red creada");
          //this.router.navigate(['']);
          //window.location.reload();
    }, err => {
      alert("Error al interntar agregar la red");
      this.router.navigate(['']);
    })
  } 

  onEnviar(event:Event){
    event.preventDefault;
    if(this.redAddForm.valid){
      alert("OK. Enviar formulario");
      this.onCreate(); //toma el método onCreate
      //this.router.navigate(['']);
      window.location.reload();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.redAddForm.markAllAsTouched();
    }
  }


}
