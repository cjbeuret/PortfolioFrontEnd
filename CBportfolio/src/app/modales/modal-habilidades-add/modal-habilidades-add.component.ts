import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-habilidades-add',
  templateUrl: './modal-habilidades-add.component.html',
  styleUrls: ['./modal-habilidades-add.component.css']
})
export class ModalHabilidadesAddComponent implements OnInit {
    
  habAddForm: FormGroup;
  //id_habilidad: number; 
  span : string='';
  nombreHab : string='';
  porcentaje : number=0;//cuando es número Ej porcentaje se inicializa en cero
  progreso : string='';
  id_persona : number=1;

  constructor(
    private formBuilder: FormBuilder, 
    private sHabilidad: HabilidadService, 
    private router:Router){
    //Creamos el grupo de controles p el formulario
      this.habAddForm= this.formBuilder.group(
        {
          span: [''],
          nombreHab: ['',[Validators.required]],
          porcentaje: [ ,[Validators.required, Validators.min(1),Validators.max(100)]],
          progreso: ['',[Validators.required]], 
          id_persona: [1],
        }
      )
    }

  //Declarar para las validaciones
  get NombreHab(){
    return this.habAddForm.get("nombreHab");
  }
  get Porcentaje(){
    return this.habAddForm.get("porcentaje");
  }
  get Progreso(){
    return this.habAddForm.get("progreso");
  }
  
  //Validaciones
  get NombreHabValid(){
    return this.NombreHab?.touched && !this.NombreHab.valid;
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
    const nuevaHab = new Habilidad(0, this.span, this.nombreHab, this.porcentaje, this.progreso, this.id_persona);
      
      console.log(nuevaHab)
      
      this.sHabilidad.create(nuevaHab).subscribe(
        data => {
          alert("Nueva habilidad creada");
          //this.router.navigate(['']);
          //window.location.reload();
    }, err => {
      alert("Error al interntar agregar la habilidad");
      this.router.navigate(['']);
    })
  } 

  onEnviar(event:Event){
    event.preventDefault;
    if(this.habAddForm.valid){
      alert("OK. Enviar formulario");
      this.onCreate(); //toma el método onCreate
      //this.router.navigate(['']);
      window.location.reload();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.habAddForm.markAllAsTouched();
    }
  }


}
