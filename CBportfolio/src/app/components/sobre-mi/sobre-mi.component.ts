import { Component, OnInit } from '@angular/core';
//import { DataService } from 'src/app/servicios/data.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
 
  isLogged: boolean = false;
  personasList: Persona[]=[]
  

   
   //modoEdit: any;
   // idEditar: number;
   //isTrue = false;


  constructor(private sPersona: PersonaService, private router:Router) {}

  ngOnInit(): void {
    this.cargarPersona();
    if (localStorage.getItem("modoLogin")) {
      this.isLogged=true;
    } 
    else {
      this.isLogged=false;
    }
  }

  cargarPersona(): void {
    this.sPersona.list().subscribe(data => {this.personasList=data});
  } //llama al método list del servicio
  
  delete(id:number){
    if(id !=undefined){
      this.sPersona.delete(id).subscribe(data =>{
        alert("Se eliminó correctamente")
        this.cargarPersona();
      },err =>{
        alert("No se pudo eliminar la experiencia"); // SALE X EL ERROR
        window.location.reload();
      })
    }
  }
  
  
/*ngOnInit(): void {
    this.cargarPersona();
    if(sessionStorage.getItem('currentUser') == "null") {
     this.modoEdit = false;
   } else if(sessionStorage.getItem('currentUser') == null) {
     this.modoEdit = false;
   } else {
     this.modoEdit = true;
   } 
  }*/
  
  
  
  
  /* ESTO era del JSON, hay que sacarlo

  
  bannerVar: any ='';
  //altBannerVar: any ='';
  imagenPerfilVar: any = '';
  //altImgPerfilVar: any = '';
  nombresVar: string = '';
  apellidosVar: string = '';
  emailVar: string = '';
  especialidad1Var: string = '';
  especialidad2Var: string = '';
  sobreMiVar: string = '';
  fechaNacVar: string = '';
  
  constructor(private datosPortfolio:DataService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      this.bannerVar=data.banner;
      //this.altBannerVar=data.altBanner;
      this.imagenPerfilVar=data.imagenPerfil;
      //this.altImgPerfilVar=data.altImagenPerfil;
      this.nombresVar=data.nombres;
      this.apellidosVar=data.apellidos;
      this.emailVar=data.email;
      this.especialidad1Var=data.especialidad1;
      this.especialidad2Var=data.especialidad2;
      this.sobreMiVar=data.sobreMi;
      this.fechaNacVar=data.fechaNac;
    });
  }
  */
}
