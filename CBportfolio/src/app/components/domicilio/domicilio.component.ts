import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { DataService } from 'src/app/servicios/data.service';
import { Router } from '@angular/router';
import { Domicilio } from 'src/app/model/domicilio';
import { DomicilioService } from 'src/app/servicios/domicilio.service';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css']
})
export class DomicilioComponent implements OnInit {

  domiciliosList: Domicilio[]=[]
  //isLogged = false;
  modoEdit: any;
  // idEditar: number;
  isTrue = false;
   
  constructor(private sDomicilio: DomicilioService, private router:Router) {} 
  //en constructor tb pone private tokenService: TokenService y no estoy segura si va el router
  
  ngOnInit(): void {
    this.cargarDomicilio();
      if(sessionStorage.getItem('currentUser') == "null") {
       this.modoEdit = false;
     } else if(sessionStorage.getItem('currentUser') == null) {
       this.modoEdit = false;
     } else {
       this.modoEdit = true;
     } 
    }  
  
    cargarDomicilio(): void {
      this.sDomicilio.list().subscribe(data => {this.domiciliosList=data});
    } //llama al método list del servicio



   /* ESTO era del JSON, hay que sacarlo

  //Tbn hay que traer el array, estamos instanciando la variable educaciones p usarla en ngOnInit
  domiciliosList : any = [];

  //el constructor está trayendo datos del servicio, datos es un alias
  constructor(private datos: DataService) {}
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data);  
      this.domiciliosList = data.domicilios
    })
  }
  */

}
