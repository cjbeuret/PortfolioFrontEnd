import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
//import { DataService } from 'src/app/servicios/data.service';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyectosList: Proyecto[]=[]
  //isLogged = false;
  modoEdit: any;
  // idEditar: number;
  isTrue = false;

  constructor(private sProyecto: ProyectoService, private router:Router) {} 
  //en constructor tb pone private tokenService: TokenService y no estoy segura si va el router
  
  ngOnInit(): void {
    this.cargarProyecto();
      if(sessionStorage.getItem('currentUser') == "null") {
       this.modoEdit = false;
     } else if(sessionStorage.getItem('currentUser') == null) {
       this.modoEdit = false;
     } else {
       this.modoEdit = true;
     } 
    }  
  
    cargarProyecto(): void {
      this.sProyecto.list().subscribe(data => {this.proyectosList=data});
    } //llama al método list del servicio

  /* ESTO era del JSON, hay que sacarlo

  //Tbn hay que traer el array, estamos instanciando la variable proyectos p usarla en ngOnInit
   proyectosList : any = [];

   modoEdit: any;
   //el constructor está trayendo datos del servicio, datos es un alias
   constructor(private datos: DataService) {} // datos se refiere a datosPorfolio
   
   ngOnInit(): void {
     this.datos.obtenerDatos().subscribe(data => {
      //console.log(data);  
      this.proyectosList = data[0].proyectos;  // acá tb probar sacando el [0] x las dudas
      
      if(sessionStorage.getItem('currentUser') == "null") {
        this.modoEdit = false;
      } else if(sessionStorage.getItem('currentUser') == null) {
        this.modoEdit = false;
      } else {
        this.modoEdit = true;
      } 

     });
   }
   */
  
}
