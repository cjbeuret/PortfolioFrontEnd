import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { IndiceComponent } from './components/indice/indice.component'; 
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { FooterComponent } from './components/footer/footer.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { GuardGuard } from './servicios/guard.guard';
import { ModalExperienciaAddComponent } from './modales/modal-experiencia-add/modal-experiencia-add.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ExperienciaEditComponent } from './components/experiencia-edit/experiencia-edit.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'indice', component: IndiceComponent}, 
  /*por ahora la pag inicio es Indice.
  Agregar canActivate:[GuardGuard] p proteger página inicio p EDICION si no estoy loggeado
  está asociado a línea 25 del guard.guards.ts (redirecciona al "inciar-sesion") 
  Pero no me funciona el botón Enviar del formulario de login*/
  {path:'login', component:LoginComponent},
  {path: 'iniciar-sesion', component: ModalLoginComponent}, 
  {path: '', component: IndiceComponent}, 
  //{path:'', redirectTo:'/indice', pathMatch:'full'},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  //estas rutas de abajo no sé si hacen falta al tener los modales q redireccionand con #id
  //{path: 'nuevaexpe', component: ModalExperienciaAddComponent, canActivate: [AuthGuard]} no sé si se usa CanActivate
  //{path: 'nuevaexpe', component: ModalExperienciaAddComponent}
  //{path: 'editarexpe/:id', component: ModalExperienciaComponent}, 
  //{path: 'editarexpe', component: ModalExperienciaComponent}, 
  {path: 'editarexpe', component: ExperienciaEditComponent}, 
  {path: 'educacion', component: EducacionComponent},
  {path: 'proyecto', component: ProyectosComponent},
  {path: 'habilidad', component: HabilidadesComponent},
  {path: 'idiom', component: IdiomasComponent},
  {path: 'domicilio', component: IdiomasComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'contacto', component: FooterComponent},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 