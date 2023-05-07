import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Idioma } from 'src/app/model/idioma';
import { IdiomaService } from 'src/app/servicios/idioma.service';

@Component({
  selector: 'app-modal-idiomas-add',
  templateUrl: './modal-idiomas-add.component.html',
  styleUrls: ['./modal-idiomas-add.component.css']
})
export class ModalIdiomasAddComponent implements OnInit {
    
  idiomaAddForm: FormGroup;

  //id_idioma: number; 
  idioma : string='';
  porcentaje : number=0;//cuando es número Ej porcentaje se inicializa en cero
  progreso: string='';
  comentario : string='';
  id_persona : number=1; //esto no sé si va

  constructor(
    private formBuilder: FormBuilder, 
    private sIdioma: IdiomaService, 
    private router:Router){
    //Creamos el grupo de controles p el formulario
      this.idiomaAddForm= this.formBuilder.group(
        {
          idioma: ['',[Validators.required]],
          porcentaje: [ ,[Validators.required, Validators.min(1),Validators.max(100)]],
          progreso: ['',[Validators.required]], 
          comentario:[''],
          id_persona: [1],
        }
      )
    }

  //Declarar para las validaciones
  get Idioma(){
    return this.idiomaAddForm.get("idioma");
  }
  get Porcentaje(){
    return this.idiomaAddForm.get("porcentaje");
  }
  get Progreso(){
    return this.idiomaAddForm.get("progreso");
  }
  
  //Validaciones
  get IdiomaValid(){
    return this.Idioma?.touched && !this.Idioma.valid;
  }
  get PorcentrajeValid(){
    return this.Porcentaje?.touched && !this.Porcentaje.valid;
  }
  get ProgresoValid(){
    return this.Progreso?.touched && !this.Progreso.valid;
  }

  ngOnInit(): void {}

  onCreate():void {
    //crea una ctte experiencia y llama el metodo create del servicio
    const nuevoIdioma = new Idioma(0, this.idioma, this.porcentaje, this.progreso, this.comentario, this.id_persona);
      
      console.log(nuevoIdioma)
      
      this.sIdioma.create(nuevoIdioma).subscribe(
        data => {
          alert("Nuevo idioma creado");
          //this.router.navigate(['']);
          //window.location.reload();
    }, err => {
      alert("Error al interntar agregar el idioma");
      this.router.navigate(['']);
    })
  } 

  onEnviar(event:Event){
    event.preventDefault;
    if(this.idiomaAddForm.valid){
      alert("OK. Enviar formulario");
      this.onCreate(); //toma el método onCreate
      //this.router.navigate(['']);
      window.location.reload();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.idiomaAddForm.markAllAsTouched();
    }
  }


}
