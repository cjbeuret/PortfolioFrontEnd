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
import { LoginComponent } from './components/login/login.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path: 'indice', component: IndiceComponent}, 
  /*por ahora la pag inicio es Indice.
  Agregar canActivate:[GuardGuard] p proteger página inicio p EDICION si no estoy loggeado
  está asociado a línea 25 del guard.guards.ts (redirecciona al "inciar-sesion") 
  Pero no me funciona el botón Enviar del formulario de login*/
  {path: 'iniciar-sesion', component: LoginComponent}, //ojo me redirecciona al botón
  {path:'', redirectTo:'/indice', pathMatch:'full'},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'experiencia', component: ExperienciaComponent}, 
  {path: 'educacion', component: EducacionComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'idiomas', component: IdiomasComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'contacto', component: FooterComponent},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 