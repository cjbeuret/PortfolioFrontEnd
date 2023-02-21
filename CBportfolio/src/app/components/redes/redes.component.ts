import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

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
}
