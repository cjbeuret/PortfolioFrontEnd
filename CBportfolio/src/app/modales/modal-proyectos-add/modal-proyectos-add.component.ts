import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';

import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyectos-add',
  templateUrl: './modal-proyectos-add.component.html',
  styleUrls: ['./modal-proyectos-add.component.css']
})
export class ModalProyectosAddComponent implements OnInit {

  proyAddForm: FormGroup;

  //id_proyecto: number=[]; 
  tituloProyecto: string='';
  imagen: string='';
  url : string='';
  destinatario : string='';
  descProyecto : string='';
  periodoDesarrollo : string='';
  id_persona : number= 1; //esto no sé si va

  constructor(
    private formBuilder: FormBuilder, 
    private sProyecto: ProyectoService, 
    private router:Router){
  //Creamos el grupo de controles p el formulario
      this.proyAddForm= this.formBuilder.group(
        {
          tituloProyecto: ['',[Validators.required]],
          imagen: [''],
          url : [''],
          destinatario : [''],
          descProyecto : ['',[Validators.required, Validators.minLength(20)]],
          periodoDesarrollo : ['',[Validators.required]],
          id_persona : [1],
      }
    )
  }
  
//Declarar para las validaciones
get TituloProyecto(){
  return this.proyAddForm.get("tituloProyecto");
}
get DescProyecto(){
  return this.proyAddForm.get("descProyecto");
}

get PeriodoDesarrollo(){
  return this.proyAddForm.get("periodoDesarrollo");
}

//Validaciones
get TituloProyectoValid(){
  return this.TituloProyecto?.touched && !this.TituloProyecto.valid;
}

get DescProyectoValid(){
  return this.DescProyecto?.touched && !this.DescProyecto.valid;
}

get PeriodoDesarrolloValid(){
  return this.PeriodoDesarrollo?.touched && !this.PeriodoDesarrollo.valid;
}

ngOnInit(): void {}

  
  onCreate():void {
    //crea una ctte experiencia y llama el metodo create del servicio
    const nuevoProy = new Proyecto (0, this.tituloProyecto, this.imagen, this.url, this.destinatario, this.descProyecto, this.periodoDesarrollo, this.id_persona);
      
      console.log(nuevoProy)
      
      this.sProyecto.create(nuevoProy).subscribe(
        data => {
          alert("Nuevo proyecto creado");
          //this.router.navigate(['']);
          //window.location.reload();
    }, err => {
      alert("Error al interntar agregar el proyecto");
      this.router.navigate(['']);
    })
  } 

  onEnviar(event:Event){
    event.preventDefault;
    if(this.proyAddForm.valid){
      alert("OK. Enviar formulario");
      this.onCreate(); //toma el método onCreate
      //this.router.navigate(['']);
      window.location.reload();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.proyAddForm.markAllAsTouched();
    }
  }

}
