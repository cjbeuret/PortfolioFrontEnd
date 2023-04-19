import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { DataService } from 'src/app/servicios/data.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //isLogged = false;

  experienciasList: Experiencia[]=[]; 
  //se llama al modelo que es un array
  //usar nombre lista del *ngFor del html p no tener q modificar eso tb
  //el modal se va a encargar de cargar la experiencia
  //eliminar sí se hace desde el componente de las Expriencias
  //va a editar una expriencia que lo tiene en otro componente (otro formulario) q es un modal
  //aggregar tb lo tiene en otro componente

  constructor(private sExperiencia: ExperienciaService, /*tokenService:TokenService*/) {}

  ngOnInit(): void {
    this.cargarExperiencia();
    /* if(this.tokenService.getToken()){
        this.isLogged = true;
    }esle{
      this,isLogged = false;
    }  */ 
  }

  cargarExperiencia(): void {
    this.sExperiencia.list().subscribe(data => {
      this.experienciasList=data
    });
  } //llama al método list del servicio

  /* CODIGO A HABILITAR
  idEdit(id:number){
    this.isTrue = true;
    this.idEditar = id;
  }
  */
  
  /*delete(id:number){
    if(id !=undefined){
      this.sExperiencia.delete(id).subscribe(data =>{
        //alert("Se eliminó correctamente")
        this.cargarExperiencia();
      },err =>{
        alert("No se pudo eliminar la experiencia")
      })
    }}*/


    delete(id:number){
         this.sExperiencia.delete(id).subscribe(data =>{
          //alert("Se eliminó correctamente")
          this.cargarExperiencia();
        });
      }
  } 

  
  

  /* ESTO era del JSON, hay que sacarlo

  //Tbn hay que traer el array, estamos instanciando la variable experiencias p usarla en ngOnInit
  experienciasList : any = [];
  //el constructor está trayendo datos del servicio, datos es un alias
  constructor(private datos: DataService) {}
  
  ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
      console.log(data); 
      this.experienciasList = data.experiencias      
       
    })
  }
  */


