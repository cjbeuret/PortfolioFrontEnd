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
  form:FormGroup;
  //id: number;
  expe: Experiencia = null;
 
  constructor(private formBuilder: FormBuilder, private sExperience: ExperienciaService, private insert:ExperienciaComponent,
    private activatedRouter: ActivatedRoute, private router: Router) {
    //creamos el grupo de controles para el formulario
    this.form= this.formBuilder.group({
      empresa: ['',[Validators.required]],
      logo: [''],
      url: [''],
      cargo: ['',[Validators.required]],
      descPuesto: [''],
      inicio: [''],
      fin: [''],
      personaid: [1] // o personaid: 1,
    })
  }

  //Declarar para las validaciones
  get Empresa(){
    return this.form.get("empresa");
  }

  get Cargo(){
    return this.form.get("cargo");
  }

   //Validaciones
   get EmpresaValid(){
    return this.Empresa?.touched && !this.Empresa.valid;
  }

  get CargoValid(){
    return this.Cargo?.touched && !this.Cargo.valid;
  }

  //Métodos Heber
  /* 
 
  ngOnInit(): void {
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
  
  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onUpdate(); //toma el método onUpdate
      alert("OK.Datos modificados");
      window.location.reload();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.form.markAllAsTouched();
    }
  }
  
  */

  //MGB computacion

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']; //captura id de la experiencia q queremos modificar
    this.sExperience.getById(id).subscribe(
      data => {
        this.expe = data;
        alert("Experiencia modificada"); 
    //window.location.reload();
    //this.router.navegate([''];)
  }, err =>{
    alert("Error al modificar la experiencia");
    window.location.reload();
    //this.router.navegate([''];)
  });
  }

  onUpdate():void {
    //crea una ctte experiencia y llama el metodo create del servicio
    const id = this.activatedRouter.snapshot.params['id'];
      //this.sExperience.edit(id, this.expe).subscribe( así me da error!
      this.sExperience.edit(id).subscribe(
        data => {
          //alert("Experiencia creada"); 
      window.location.reload();
      //this.router.navegate([''];)
    }, err =>{
      alert("Error al modificar la experiencia");
      window.location.reload();
      //this.router.navegate([''];)
    });
  } 

  onEnviar(event:Event){
    event.preventDefault;
    if(this.form.valid){
      this.onUpdate(); //toma el método onUpdate
      alert("OK.Datos modificados");
      window.location.reload();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.form.markAllAsTouched();
    }
  }


  cerrar(): void{
    window.location.reload();
  }

  limpiar(): void{
    this.form.reset();
  }

  



}

