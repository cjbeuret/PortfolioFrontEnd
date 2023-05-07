import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-educacion-add',
  templateUrl: './modal-educacion-add.component.html',
  styleUrls: ['./modal-educacion-add.component.css']
})
export class ModalEducacionAddComponent implements OnInit{

  educAddForm: FormGroup;

  //id_educacion: number[]; 
  institucion: string='';
  logo: string='';
  url : string='';
  titulo : string='';
  alcanceTitulo : string='';
  fechaObt : string='';
  comentario : string='';
  id_persona : number=1; 

  constructor(
    private formBuilder: FormBuilder, 
    private sEducacion: EducacionService, 
    private router:Router){
  //Creamos el grupo de controles p el formulario
    this.educAddForm= this.formBuilder.group(
      {
      institucion: ['',[Validators.required]],
      logo: [''],
      url: [''],
      titulo: ['',[Validators.required]], 
      alcanceTitulo: [''],
      fechaObt: [''],
      comentario: [''],
      id_persona: [1],
    })
  }
  
//Declarar para las validaciones
get Institucion(){
  return this.educAddForm.get("institucion");
}
/*get Logo(){
  return this.form.get("logo");
}
get Url(){
  return this.form.get("url");
}*/
get Titulo(){
  return this.educAddForm.get("titulo");
}
/*get AlcanceTtitulo(){
  return this.form.get("alcanceTtitulo");
}
get FechaObt(){
  return this.form.get("fechaObt");
}
get Comentario(){
  return this.form.get("comentario");
}*/

//Validaciones
get InsitucionValid(){
  return this.Institucion?.touched && !this.Institucion.valid;
}

get TituloValid(){
  return this.Titulo?.touched && !this.Titulo.valid;
}

ngOnInit(): void {}

  
  onCreate():void {
    //crea una ctte experiencia y llama el metodo create del servicio
    const nuevaEduc = new Educacion(0, this.institucion, this.logo, this.url, this.titulo, this.alcanceTitulo, 
      this.fechaObt, this.comentario, this.id_persona);
      
      console.log(nuevaEduc)
      
      this.sEducacion.create(nuevaEduc).subscribe(
        data => {
          alert("Nueva educacion creada");
          //this.router.navigate(['']);
          //window.location.reload();
    }, err => {
      alert("Error al interntar agregar la educacion");
      this.router.navigate(['']);
    })
  } 

  onEnviar(event:Event){
    event.preventDefault;
    if(this.educAddForm.valid){
      alert("OK. Enviar formulario");
      this.onCreate(); //toma el método onCreate
      //this.router.navigate(['']);
      window.location.reload();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.educAddForm.markAllAsTouched();
    }
  }

}
