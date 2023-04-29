import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
    
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
  
}
