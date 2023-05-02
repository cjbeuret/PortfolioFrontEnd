import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaComponent } from 'src/app/components/experiencia/experiencia.component';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';


@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})

export class ModalExperienciaComponent implements OnInit {
  expForm: FormGroup;
  id: number;
  expe: Experiencia = null;
  //expe: Experiencia;

//MGB computacion
/*
  constructor(
    private formBuilder: FormBuilder, 
    private sExperience: ExperienciaService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router) {}
  


ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id']; //captura id de la experiencia q queremos modificar
  this.sExperience.getById(id).subscribe(
    data => {
      this.expe = data;
      //window.location.reload();
      //this.router.navigate(['']);
  }, err =>{
    //alert("Error al modificar la experiencia");
    //window.location.reload(); --> está en el método original pero me deja recargando la página y con e error
    //this.router.navigate(['']);
  })
}

onUpdate():void {
  //crea una ctte experiencia para capturar el id de la experiencia 
  const id = this.activatedRouter.snapshot.params['id'];
  //llama el metodo del servicio
  this.sExperience.editById(id, this.expe).subscribe(
  //this.sExperience.edit(id).subscribe( 
    data => {
      alert("Experiencia modificada"); 
      this.router.navigate(['']);
      //window.location.reload();  
    }, err =>{
      alert("Error al modificar la experiencia");
      //window.location.reload();
      this.router.navigate(['']);
    });
  } 

 */
 
 // heber

  constructor(
    private formBuilder: FormBuilder, 
    private sExperience: ExperienciaService, 
    private insert: ExperienciaComponent,
    private activatedRouter: ActivatedRoute, 
    private router: Router) {
    //creamos el grupo de controles para el formulario
    this.expForm= this.formBuilder.group({
      id:[''],
      empresa: ['',[Validators.required]],
      logo: [''],
      url: [''],
      cargo: ['',[Validators.required]],
      descPuesto: [''],
      inicio: [''],
      fin: [''],
      personaid: [1], // o personaid: 1,
    })
  }

  //Declarar para las validaciones
  get Empresa(){
    return this.expForm.get("empresa");
  }

  get Cargo(){
    return this.expForm.get("cargo");
  }

   //Validaciones
   get EmpresaValid(){
    return this.Empresa?.touched && !this.Empresa.valid;
  }

  get CargoValid(){
    return this.Cargo?.touched && !this.Cargo.valid;
  }
 
 
  /*ngOnInit(): void {
    this.info();
  }

  info():void {
    //this.id = this.insert.idEditar;
    this.sExperience.getById(this.id).subscribe(data =>
      {this.expe=data},
      err =>{
        alert("Error al llamar a los datos");
      });
  }

  onUpdate(): void{
    this.sExperience.edit(this.expe).subscribe(data=>{})
  } 
*/ 
  /*onUpdate(): void{
    this.sExperience.editById(this.id, this.expe).subscribe(data=>{})
  } */

  ngOnInit(): void {
    this.miInfo();
  }

  miInfo():void {
    const id = this.activatedRouter.snapshot.params['id']; //captura id de la experiencia q queremos modificar
    this.sExperience.getById(id).subscribe(
      data => {
        this.expe = data;
        //window.location.reload();
        //this.router.navigate(['']);
      }
    )} 

  miOnUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.sExperience.editById(id, this.expe).subscribe(
    //this.sExperience.edit(id).subscribe( 
      data => {
        alert("Experiencia modificada"); 
        this.router.navigate(['']);
        //window.location.reload();
      }
    )}     
  
  onEnviar(event:Event){
  event.preventDefault;
  if(this.expForm.valid){
    this.miOnUpdate(); //toma el método onUpdate
    alert("OK.Datos modificados");
    //this.router.navigate(['']);
    window.location.reload();
  }else{
    alert("Error de carga. Intente nuevamente");
    this.expForm.markAllAsTouched();
  }
}

  cerrar(): void{
    window.location.reload();
  }

  limpiar(): void{
    this.expForm.reset();
  }



  


}

