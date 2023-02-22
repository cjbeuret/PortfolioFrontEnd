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

const routes: Routes = [
  //{path:'', redirectTo:'/indice', pathMatch:'full'},  
  {path: '', component: IndiceComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'experiencia', component: ExperienciaComponent}, 
  {path: 'educacion', component: EducacionComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'idiomas', component: IdiomasComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'footer', component: FooterComponent},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 