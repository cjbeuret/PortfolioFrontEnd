import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {
  
  expEditar: Experiencia = null;

  expeForm: FormGroup;
  

  constructor(private sExperiencia: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {}

//Declarar para las validaciones
get Empresa(){
  return this.expeForm.get("empresa");
}

get Cargo(){
  return this.expeForm.get("cargo");
}

 //Validaciones
 get EmpresaValid(){
  return this.Empresa?.touched && !this.Empresa.valid;
}

get CargoValid(){
  return this.Cargo?.touched && !this.Cargo.valid;
}

  /*ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id_experiencia'];
    this.sExperiencia.getById(id).subscribe(
      data =>{
        this.expEditar = data;
      }, err =>{
        alert("Error. No se pudo modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }*/

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id_experiencia'];
    this.sExperiencia.edit(this.expEditar).subscribe(
      data => {
        this.router.navigate(['']);
         alert("OK");
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}
