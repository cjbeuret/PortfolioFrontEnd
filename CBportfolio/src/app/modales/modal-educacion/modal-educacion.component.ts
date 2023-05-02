import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  educForm: FormGroup;
  //id: number;
  educ: Educacion = null;
  //educ: Educacion;
  
  constructor(
    private formBuilder: FormBuilder, 
    private sEducacion: EducacionService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router
    ) {}
  
    ngOnInit(): void {}

    /*
    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id']; //captura id de la experiencia q queremos modificar
      this.sEducacion.getById(id).subscribe(
        data => {
          this.educ = data;
          //window.location.reload();
          //this.router.navigate(['']);
      }, err =>{
        //alert("Error al modificar la experiencia");
        //window.location.reload(); --> está en el método original pero me deja recargando la página y con e error
        //this.router.navigate(['']);
      })
    }
    */

    onUpdate():void {
      //crea una ctte experiencia para capturar el id de la experiencia 
      const id = this.activatedRouter.snapshot.params['id'];
      //llama el metodo del servicio
      this.sEducacion.editById(id, this.educ).subscribe(
      //this.sExperience.edit(id).subscribe( 
        data => {
          alert("Experiencia modificada"); 
          this.router.navigate(['']);
          //window.location.reload();  
        }, err =>{
          alert("Error al modificar la educacion");
          //window.location.reload();
          this.router.navigate(['']);
        });
      } 
  
    onEnviar(event:Event){
      event.preventDefault;
      if(this.educForm.valid){
        this.onUpdate(); //toma el método onUpdate
        alert("OK.Datos modificados");
        //this.router.navigate(['']);
        window.location.reload();
      }else{
        alert("Error de carga. Intente nuevamente");
        this.educForm.markAllAsTouched();
      }
    }

}

