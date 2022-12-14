import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { XpComponent } from './components/xp/xp.component';
import { EduComponent } from './components/edu/edu.component';
import { HardnsoftComponent } from './components/hardnsoft/hardnsoft.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { UsersService } from './services/login.service';
import { InterceptorService } from './services/interceptor.service';
import { DataService } from './services/data.service';
import { EditarFotoPerfilComponent } from './components/editar/editar-foto-perfil/editar-foto-perfil.component';
import { EducationComponent } from './components/agregar/education/education.component';
import { CertificadosComponent } from './components/agregar/certificados/certificados.component';
import { HnsskillsComponent } from './components/agregar/hnsskills/hnsskills.component';
import { XperienceComponent } from './components/agregar/xperience/xperience.component';
import { EditarAboutmeComponent } from './components/editar/editar-aboutme/editar-aboutme.component';
import { BorrarhnsComponent } from './components/borrar/borrarhns/borrarhns.component';
import { CerrarsesComponent } from './components/cerrarses/cerrarses.component';
import { InfocontactoComponent } from './components/infocontacto/infocontacto.component';
import { EditarInfocontactoComponent } from './components/editar/editar-infocontacto/editar-infocontacto.component';
import { EditarInfopersonalComponent } from './components/editar/editar-infopersonal/editar-infopersonal.component';
import { AniadiraboutmeComponent } from './components/agregar/aniadiraboutme/aniadiraboutme.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/agregar/proyecto/proyecto.component';
import { BorrarproyeComponent } from './components/borrar/borrarproye/borrarproye.component';
import { BorraracercademiComponent } from './components/borrar/borraracercademi/borraracercademi.component';
import { BorrarxpComponent } from './components/borrar/borrarxp/borrarxp.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    AboutmeComponent,
    XpComponent,
    EduComponent,
    HardnsoftComponent,
    CertificationsComponent,
    LoginComponent,
    PortfolioComponent,
    EditarFotoPerfilComponent,
    EducationComponent,
    CertificadosComponent,
    HnsskillsComponent,
    XperienceComponent,
    EditarAboutmeComponent,
    BorrarhnsComponent,
    CerrarsesComponent,
    InfocontactoComponent,
    EditarInfocontactoComponent,
    EditarInfopersonalComponent,
    AniadiraboutmeComponent,
    ProyectosComponent,
    ProyectoComponent,
    BorrarproyeComponent,
    BorraracercademiComponent,
    BorrarxpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
