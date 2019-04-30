import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { AboutComponent } from './Components/about/about.component';
import { NoFound404Component } from './Components/Shared/no-found404/no-found404.component';

import { APP_ROUTING } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    NoFound404Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
