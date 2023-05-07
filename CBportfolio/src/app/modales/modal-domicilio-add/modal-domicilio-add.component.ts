import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Domicilio } from 'src/app/model/domicilio';
import { DomicilioService } from 'src/app/servicios/domicilio.service';

@Component({
  selector: 'app-modal-domicilio-add',
  templateUrl: './modal-domicilio-add.component.html',
  styleUrls: ['./modal-domicilio-add.component.css']
})
export class ModalDomicilioAddComponent implements OnInit {
    
  domAddForm: FormGroup;
  
  //id_domicilio: number; 
  calle: string='';
  altura: string='';
  piso : string='';
  localidad : string='';
  provincia : string='';
  mapa : string='';
  id_persona : number=1; //esto no sé si va
    
  constructor(
    private formBuilder: FormBuilder, 
    private sDomicilio: DomicilioService, 
    private router:Router){
    //Creamos el grupo de controles p el formulario
      this.domAddForm= this.formBuilder.group(
        {
          calle: ['',[Validators.required]],
          altura: ['',[Validators.required]],
          piso : [''],
          localidad : ['',[Validators.required]],
          provincia : [''],
          mapa : [''],
          id_persona: [1],
        }
      )
    }

  //Declarar para las validaciones
  get Calle(){
    return this.domAddForm.get("calle");
  }
  get Altura(){
    return this.domAddForm.get("altura");
  }
  get Localidad(){
    return this.domAddForm.get("localidad");
  }
  
  //Validaciones
  get CalleValid(){
    return this.Calle?.touched && !this.Calle.valid;
  }
  get AlturaValid(){
    return this.Altura?.touched && !this.Altura.valid;
  }
  get LocalidadValid(){
    return this.Localidad?.touched && !this.Localidad.valid;
  }

  ngOnInit(): void {}

  onCreate():void {
    //crea una ctte experiencia y llama el metodo create del servicio
    const nuevoDom = new Domicilio (0, this.calle, this.altura, this.piso, this.localidad, this.provincia, this.mapa, this.id_persona);
      
      console.log(nuevoDom)
      
      this.sDomicilio.create(nuevoDom).subscribe(
        data => {
          alert("Nuevo Domicilio creado");
          //this.router.navigate(['']);
          //window.location.reload();
    }, err => {
      alert("Error al interntar agregar el domicilio");
      this.router.navigate(['']);
    })
  } 

  onEnviar(event:Event){
    event.preventDefault;
    if(this.domAddForm.valid){
      alert("OK. Enviar formulario");
      this.onCreate(); //toma el método onCreate
      //this.router.navigate(['']);
      window.location.reload();
    }else{
      alert("Error de carga. Intente nuevamente");
      this.domAddForm.markAllAsTouched();
    }
  }

}
