import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndiceComponent } from './components/indice/indice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { FooterComponent } from './components/footer/footer.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { ModalLogoutComponent } from './modales/modal-logout/modal-logout.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { ModalBannerComponent } from './modales/modal-banner/modal-banner.component';
import { ModalFotoPerfilComponent } from './modales/modal-foto-perfil/modal-foto-perfil.component';
import { ModalDatosPerfilComponent } from './modales/modal-datos-perfil/modal-datos-perfil.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';
import { ModalProyectosComponent } from './modales/modal-proyectos/modal-proyectos.component';
import { ModalHabilidadesComponent } from './modales/modal-habilidades/modal-habilidades.component';
import { ModalContactoComponent } from './modales/modal-contacto/modal-contacto.component';
import { ModalIdiomasComponent } from './modales/modal-idiomas/modal-idiomas.component';
import { ModalRedesComponent } from './modales/modal-redes/modal-redes.component';
import { RedesComponent } from './components/redes/redes.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DomicilioComponent } from './components/domicilio/domicilio.component';
import { ModalDomicilioComponent } from './modales/modal-domicilio/modal-domicilio.component';
import { ModalExperienciaAddComponent } from './modales/modal-experiencia-add/modal-experiencia-add.component';
import { DataService } from './servicios/data.service';
import { InterceptorService } from './servicios/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    NavbarComponent,
    LoginComponent,
    LogoutComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    ProyectosComponent,
    HabilidadesComponent,
    HobbiesComponent,
    FooterComponent,
    Pagina404Component,
    ModalLoginComponent,
    ModalLogoutComponent,
    IdiomasComponent,
    ModalBannerComponent,
    ModalFotoPerfilComponent,
    ModalDatosPerfilComponent,
    ModalExperienciaComponent,
    ModalEducacionComponent,
    ModalProyectosComponent,
    ModalHabilidadesComponent,
    ModalContactoComponent,
    ModalIdiomasComponent,
    ModalRedesComponent,
    RedesComponent,
    ContactoComponent,
    DomicilioComponent,
    ModalDomicilioComponent,
    ModalExperienciaAddComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  //agregamos el servicio al array de providers
  providers: [DataService,
  {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
