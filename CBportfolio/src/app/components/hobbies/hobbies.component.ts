import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  //Tbn hay que traer el array, estamos instanciando la variable hobbies p usarla en ngOnInit
  hobbiesVar : any = [];
  //el constructor está trayendo datos del servicio, datos es un alias
  constructor(private datos: DataService) {}
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data);  
      this.hobbiesVar = data.hobbies      
      
    })
  }
}
