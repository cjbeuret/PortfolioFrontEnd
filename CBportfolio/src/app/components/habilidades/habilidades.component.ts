import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
//import { DataService } from 'src/app/servicios/data.service';
import { Router } from '@angular/router';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
 
  habilidadesList: Habilidad[]=[]
  //isLogged = false;
  modoEdit: any;
  // idEditar: number;
  isTrue = false;
   
  constructor(private sHabilidad: HabilidadService, private router:Router) {} 
  //en constructor tb pone private tokenService: TokenService y no estoy segura si va el router
  
 ngOnInit(): void {
    this.cargarHabilidad();
      if(sessionStorage.getItem('currentUser') == "null") {
       this.modoEdit = false;
     } else if(sessionStorage.getItem('currentUser') == null) {
       this.modoEdit = false;
     } else {
       this.modoEdit = true;
     } 
    }  
  
    cargarHabilidad(): void {
      this.sHabilidad.list().subscribe(data => {this.habilidadesList=data});
    } //llama al método list del servicio




  /* ESTO era del JSON, hay que sacarlo

  //Tbn hay que traer el array, estamos instanciando la variable habilidades p usarla en ngOnInit
  habilidadesList : any = [];
  //el constructor está trayendo datos del servicio, datos es un alias
  constructor(private datos: DataService) {}
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data); 
      this.habilidadesList = data.habilidades      
      
    })
  }
  */

}
