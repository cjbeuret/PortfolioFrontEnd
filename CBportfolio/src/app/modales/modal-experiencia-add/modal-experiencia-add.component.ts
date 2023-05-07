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

  expeAddForm: FormGroup;
  //id_experiencia: number;
  empresa: string='';
  logo: string='';
  url: string='';
  cargo: string='';
  descPuesto: string='';
  inicio: string='';
  fin: string='';
  id_persona: number =1;   //cuando es número Ej porcentaje se inicializa en cero

constructor(
  private formBuilder: FormBuilder, 
  private sExperience: ExperienciaService, 
  private router:Router){
//Creamos el grupo de controles p el formulario
  this.expeAddForm= this.formBuilder.group(
    {
      empresa: ['',[Validators.required]],
      logo: [''],
      url: [''],
      cargo: ['',[Validators.required]], 
      descPuesto: [''],
      inicio: [''],
      fin: [''],
      id_persona: [1],
    }
  )
}

  //Declarar para las validaciones
  get Empresa(){
    return this.expeAddForm.get("empresa");
  }
  /*get Logo(){
    return this.form.get("logo");
  }
  get Url(){
    return this.form.get("url");
  }*/
  get Cargo(){
    return this.expeAddForm.get("cargo");
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
  
  ngOnInit(): void {}

  
  onCreate():void {
    //crea una ctte experiencia y llama el metodo create del servicio
    const nuevaExpe = new Experiencia(0, this.empresa, this.logo, this.url, this.cargo, this.descPuesto, 
      this.inicio, this.fin, this.id_persona);
      
      console.log(nuevaExpe)
      
      this.sExperience.create(nuevaExpe).subscribe(
        data => {
          alert("Nueva experiencia creada");
          //this.router.navigate(['']);
          //window.location.reload();
    }, err => {
      alert("Error al interntar agregar la experiencia");
      this.router.navigate(['']);
    })
  } 

  onEnviar(event:Event){
    event.preventDefault;
    if(this.expeAddForm.valid){
      alert("OK. Enviar formulario");
      this.onCreate(); //toma el método onCreate
      //this.router.navigate(['']);
      window.location.reload();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.expeAddForm.markAllAsTouched();
    }
  }

  /*!! OJO NO LIMPIA sino q cierra el form
  limpiar(): void{
    this.expeAddForm.reset();
  }*/

}
