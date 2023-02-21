import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //Tbn hay que traer el array, estamos instanciando la variable experiencias p usarla en ngOnInit
  redesList : any = [];
  mostrar: boolean = false;

  //el constructor está trayendo datos del servicio, datos es un alias
  constructor(private datos: DataService) {}
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data); 
      this.redesList = data.redes      
       
    })
  }

  muestra():void {
    this.mostrar=!this.mostrar;
  }
  

}
