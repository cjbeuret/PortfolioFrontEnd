import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  //Tbn hay que traer el array, estamos instanciando la variable educaciones p usarla en ngOnInit
  telefonoVar: string = '';
  emailVar: string = '';

  //el constructor está trayendo datos del servicio, datos es un alias
    constructor(private datos:DataService) {}

  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data);  
      this.telefonoVar=data.telefono;
      this.emailVar=data.email;
    })
  }
}
