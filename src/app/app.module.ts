import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './components/head/head.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { XpComponent } from './components/xp/xp.component';
import { EduComponent } from './components/edu/edu.component';
import { HardnsoftComponent } from './components/hardnsoft/hardnsoft.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    AboutmeComponent,
    XpComponent,
    EduComponent,
    HardnsoftComponent,
    CertificationsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
