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
 
  personasList: Persona[]=[]
  /*
  nombreVar: string = '';
  apellidoVar: string = '';
  especialidad1Var: string = '';
  especialidad2Var: string = '';
  sobreMiVar: string = '';
  bannerVar: any ='';
  //altBannerVar: any ='';
  imagenPerfilVar: any = '';
  //altImgPerfilVar: any = '';
  telefonoVar: any = '';
  emailVar: string = '';
  passwordVar: string = '';
  fechaNacVar: string = '';
  */

   //isLogged = false;
   modoEdit: any;
   // idEditar: number;
   isTrue = false;


  constructor(private sPersona: PersonaService, private router:Router) {}

  ngOnInit(): void {
    this.cargarPersona();
    if(sessionStorage.getItem('currentUser') == "null") {
     this.modoEdit = false;
   } else if(sessionStorage.getItem('currentUser') == null) {
     this.modoEdit = false;
   } else {
     this.modoEdit = true;
   } 
  }

  
  /*
  cargarPersona(): void {
    this.sPersona.getById(1).subscribe(data => {
    this.nombreVar=data.nombre;
    this.apellidoVar=data.apellido;
    this.especialidad1Var=data.especialidad1;
    this.especialidad2Var=data.especialidad2;
    this.sobreMiVar=data.sobreMi;
    this.bannerVar=data.banner;
    //this.altBannerVar=data.altBanner;
    this.imagenPerfilVar=data.imagen;
    //this.altImgPerfilVar=data.altImagenPerfil;
    this.telefonoVar=data.telefono;
    this.emailVar=data.email;
    this.passwordVar=data.password;
    this.fechaNacVar=data.fechaNac;
    });
  }
  */
  
  cargarPersona(): void {
    this.sPersona.list().subscribe(data => {this.personasList=data});
  } //llama al método list del servicio
  

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
