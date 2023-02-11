import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
    
   //Tbn hay que traer el array, estamos instanciando la variable proyectos p usarla en ngOnInit
   proyectosVar : any = [];
   //el constructor está trayendo datos del servicio, datos es un alias
   constructor(private datos: DataService) {}
   
   ngOnInit(): void {
     this.datos.obtenerDatos().subscribe(data => {
      console.log(data);  
      this.proyectosVar = data.proyectos      
        
     })
   }
  
}
