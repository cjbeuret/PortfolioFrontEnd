import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
//import { DataService } from 'src/app/servicios/data.service';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  //se llama al modelo que es un array
  //usar nombre lista del *ngFor del html p no tener q modificar eso tb
  experienciasList: Experiencia[]=[]
  //experienciasList: any = []; --> esta era la del JSON
  
  //esto es del modal
  //expeForm: FormGroup;
  //expe: Experiencia = new Experiencia (0,'','','','','','','',1); //?esto es de EDIT?

  isLogged: boolean = false;
  //modoEdit: any;
  //idEditar: number;
  //isTrue = false;
  activatedRouter: any;
   
  constructor(private sExperiencia: ExperienciaService, private router:Router) {} 
  //en constructor tb pone private tokenService: TokenService y no estoy segura si va el router
 
  ngOnInit(): void {
    this.cargarExperiencia();
    if (localStorage.getItem("modoLogin")) {
      this.isLogged=true;
    } 
    else {
      this.isLogged=false;
    }
  }
 
  cargarExperiencia(): void {
      this.sExperiencia.list().subscribe(
        data => {
          this.experienciasList=data});
          //this.router.navigate(['']);
          //window.location.reload();
    } //llama al método list del servicio  
  
  delete(id:number){
    if(id !=undefined){
      this.sExperiencia.delete(id).subscribe(
        data =>{
          alert("Se eliminó correctamente");
          this.cargarExperiencia();
        },err =>{
          //alert("No se pudo eliminar la experiencia"); // SALE X EL ERROR
          window.location.reload();
        }
      )
    }
  }
  
    /*idEdit(id:number){
      /*this.isTrue = true;
      this.idEditar = id;
      console.log("paso1");
    }*/

/*ngOnInit(): void {
    this.cargarExperiencia();
      if(sessionStorage.getItem('currentUser') == "null") {
       this.modoEdit = false;
     } else if(sessionStorage.getItem('currentUser') == null) {
       this.modoEdit = false;
     } else {
       this.modoEdit = true;
     } 
    }  */

   /*onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id_experiencia'];
      this.sExperiencia.edit(this.expe).subscribe(
        data =>{
          alert("Experiencia modificada"); 
          this.router.navigate(['']);
          //window.location.reload();
        }
      )
    } */
  
  
//  constructor(private sExperiencia: ExperienciaService, /*tokenService:TokenService*/) {} 
/*
  ngOnInit(): void {
    this.cargarExperiencia();
    /* if(this.tokenService.getToken()){
        this.isLogged = true;
    }else{
      this,isLogged = false;
    }  
  }

// TAL VEZ ESTO VA EN EL MODAL?!
  
  /*ngOnInit(): void {
    this.datos.obtenerDatos().subscribe(data => {
     //console.log(data);  
     this.experienciasList = data[0].experiencias;  // acá tb probar sacando el [0] x las dudas
     
     if(sessionStorage.getItem('currentUser') == "null") {
       this.modoEdit = false;
     } else if(sessionStorage.getItem('currentUser') == null) {
       this.modoEdit = false;
     } else {
       this.modoEdit = true;
     } 
    });
  }
  */

  

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


