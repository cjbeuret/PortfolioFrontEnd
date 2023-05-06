import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/model/idioma';
import { DataService } from 'src/app/servicios/data.service';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  
 idiomasList: Idioma[]=[]
  //isLogged = false;
  modoEdit: any;
  // idEditar: number;
  //isTrue = false;
   
  constructor(private sIdioma: IdiomaService) {} 
  //en constructor tb pone private tokenService: TokenService y no estoy segura si va el router
  

   ngOnInit(): void {
    this.cargarIdioma();
      if(sessionStorage.getItem('currentUser') == "null") {
       this.modoEdit = false;
     } else if(sessionStorage.getItem('currentUser') == null) {
       this.modoEdit = false;
     } else {
       this.modoEdit = true;
     } 
    }  
  
    cargarIdioma(): void {
      this.sIdioma.list().subscribe(data => {this.idiomasList=data});
    } //llama al método list del servicio

    delete(id:number){
      if(id !=undefined){
        this.sIdioma.delete(id).subscribe(data =>{
          alert("Se eliminó correctamente");
          this.cargarIdioma();
        },err =>{
          alert("No se pudo eliminar la experiencia"); // SALE X EL ERROR
          window.location.reload();
        })
      }
    }
  
  /* ESTO era del JSON, hay que sacarlo

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
  */
}
