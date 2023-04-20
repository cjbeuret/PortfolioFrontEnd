import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
 
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
}
