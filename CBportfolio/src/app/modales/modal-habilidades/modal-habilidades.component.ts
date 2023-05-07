import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-habilidades',
  templateUrl: './modal-habilidades.component.html',
  styleUrls: ['./modal-habilidades.component.css']
})
export class ModalHabilidadesComponent implements OnInit {
  
  habForm: FormGroup;
  id: number;
  
  //expe: Experiencia = null;
  habEdit: Habilidad = new Habilidad (0,'','',0,'',1);
  
    
  constructor(
    private formBuilder: FormBuilder, 
    private sHabilidad: HabilidadService, 
    //private insert: HabilidadComponent,
    private activatedRouter: ActivatedRoute, 
    private router: Router) {

    //creamos el grupo de controles para el formulario
    this.habForm= this.formBuilder.group(
      {
        id_habilidad:[],
        span: [''],
        nombreHab: ['',[Validators.required]],
        porcentaje: [ ,[Validators.required, Validators.min(1),Validators.max(100)]],
        progreso: ['',[Validators.required]], 
        id_persona: [1],
    })
  }

   //Declarar para las validaciones
   get NombreHab(){
    return this.habForm.get("nombreHab");
  }
  get Porcentaje(){
    return this.habForm.get("porcentaje");
  }
  get Progreso(){
    return this.habForm.get("progreso");
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

  ngOnInit(): void {
    //this.traerHabilidad();
  }

  traerHabilidad() {
    const id = this.activatedRouter.snapshot.params['id_habilidad'];

    this.sHabilidad.getById(id).subscribe(
      data=> {this.habEdit=data;
      }, err => {
        alert("Error al modificar la habilidad") //ESTE ES EL ERROR QUE TRAE AL RECARGAR LA PÁGINA
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    this.sHabilidad.edit(this.habEdit).subscribe(
      data=>{
        alert("Habilidad modificada");
        this.router.navigate(['']);
    }, err=>{
       alert("fallo al modificar la habilidad");
       this.router.navigate(['']);
    })
  } 

  onEnviar(event:Event){
    event.preventDefault;
    if(this.habForm.valid){
      this.onUpdate(); //toma el método onUpdate
      alert("OK.Datos modificados");
      this.router.navigate(['']);
      //window.location.reload();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.habForm.markAllAsTouched();
    }
  }

}

