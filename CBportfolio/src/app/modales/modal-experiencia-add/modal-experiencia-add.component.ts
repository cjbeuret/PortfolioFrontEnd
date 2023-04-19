import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-experiencia-add',
  templateUrl: './modal-experiencia-add.component.html',
  styleUrls: ['./modal-experiencia-add.component.css']
})
export class ModalExperienciaAddComponent implements OnInit{

  form: FormGroup;
  //id: number;
  empresa: string='';
  logo: string='';
  url: string='';
  cargo: string='';
  descPuesto: string='';
  inicio: string='';
  fin: string='';
  personaid: number=1;   //cuando es número Ej porcentaje se inicializa en cero

constructor(private formBuilder: FormBuilder, private sExperience: ExperienciaService){
//Creamos el grupo de controles p el formulario
  this.form= this.formBuilder.group({
    empresa: ['',[Validators.required]],
    logo: [''],
    url: [''],
    cargo: ['',[Validators.required]],
    descPuesto: [''],
    inicio: [''],
    fin: [''],
    personaid: 1
  })
}

  ngOnInit(): void {}

  //Declarar para las validaciones
  get Empresa(){
    return this.form.get("empresa");
  }
  /*get Logo(){
    return this.form.get("logo");
  }
  get Url(){
    return this.form.get("url");
  }*/
  get Cargo(){
    return this.form.get("cargo");
  }
  /*get DescPuesto(){
    return this.form.get("descPuesto");
  }
  get Inicio(){
    return this.form.get("inicio");
  }
  get Fin(){
    return this.form.get("fin");
  }*/

  //Validaciones
  get EmpresaValid(){
    return this.Empresa?.touched && !this.Empresa.valid;
  }

  get CargoValid(){
    return this.Cargo?.touched && !this.Cargo.valid;
  }
  
  

  onCreate():void {
    const expe = new Experiencia(this.empresa, this.logo, this.url,this.cargo, this.descPuesto, 
      this.inicio, this.fin, this.personaid);
    this.sExperience.create(expe).subscribe(data => {
      alert("Experiencia añadida"); 
      window.location.reload();
    }, err =>{
      alert("Falló la carga, intente nuevamente");
      this.form.reset();
    });
  }

  limpiar(): void{
    this.form.reset();
  }

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      alert("Perfecto. Enviar formulario");
      this.onCreate();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

}
