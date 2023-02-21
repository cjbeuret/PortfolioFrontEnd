import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  //Tbn hay que traer el array, estamos instanciando la variable idiomas p usarla en ngOnInit
  idiomasList : any = [];
  //el constructor está trayendo datos del servicio, datos es un alias
  constructor(private datos: DataService) {}
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data); 
      this.idiomasList = data.idiomas      
      
    })
  }
}
