import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Red } from 'src/app/model/red';
//import { DataService } from 'src/app/servicios/data.service';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  redesList: Red[]=[]
  //isLogged = false;
  modoEdit: any;
  // idEditar: number;
  //isTrue = false;
  activatedRouter: any;

  constructor(private sRed: RedService, private router:Router) {} 
  //en constructor tb pone private tokenService: TokenService y no estoy segura si va el router
  
  ngOnInit(): void {
    this.cargarRed();
      if(sessionStorage.getItem('currentUser') == "null") {
       this.modoEdit = false;
     } else if(sessionStorage.getItem('currentUser') == null) {
       this.modoEdit = false;
     } else {
       this.modoEdit = true;
     } 
    }  
  
    cargarRed(): void {
      this.sRed.list().subscribe(data => {this.redesList=data});
    } //llama al método list del servicio

    delete(id:number){
      if(id !=undefined){
        this.sRed.delete(id).subscribe(data =>{
          alert("Se eliminó correctamente")
          this.cargarRed();
        },err =>{
          //alert("No se pudo eliminar la experiencia"); // SALE X EL ERROR
          window.location.reload();
        })
      }
    }

  /* ESTO era del JSON, hay que sacarlo

  //Tbn hay que traer el array, estamos instanciando la variable experiencias p usarla en ngOnInit
  redesList : any = [];

   //el constructor está trayendo datos del servicio, datos es un alias
   constructor(private datos: DataService) {}

   ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data); 
      this.redesList = data.redes         
    })
  }
  */
}
