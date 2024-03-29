import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
//import { DataService } from 'src/app/servicios/data.service';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  educacionesList: Educacion[]=[]
  //isLogged = false;
  modoEdit: any;
  // idEditar: number;
  isTrue = false;
   
  constructor(private sEducacion: EducacionService, private router:Router) {} 
   //en constructor tb pone private tokenService: TokenService y no estoy segura si va el router
  
  ngOnInit(): void {
    this.cargarEducacion();
      if(sessionStorage.getItem('currentUser') == "null") {
       this.modoEdit = false;
     } else if(sessionStorage.getItem('currentUser') == null) {
       this.modoEdit = false;
     } else {
       this.modoEdit = true;
     } 
    }  
  
    cargarEducacion(): void {
      this.sEducacion.list().subscribe(data => {this.educacionesList=data});
    } //llama al método list del servicio
  
    borrar(id?:number){
      if(id!=undefined){
        this.sEducacion.delete(id).subscribe(
          data=>{
            this.cargarEducacion();
          }, err =>{
            alert("No se pudo eliminar");
          }
        )
      }
    }
  
  /* ESTO era del JSON, hay que sacarlo

  educacionesList : any = [];
  
  constructor(private datos: DataService) {}
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data);  
      this.educacionesList = data.educaciones      
     
    })
  }
  */
  
}
