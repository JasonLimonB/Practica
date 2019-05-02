import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { HomeComponent } from './Components/home/home.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { NoFound404Component } from './Components/Shared/no-found404/no-found404.component';

// Importacion de Rutas
import { APP_ROUTING } from './app.routes';

// Importacion de Servicio
import { HeroesService } from './Servicios/heroes.service';
import { BuscadorComponent } from './Components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './Components/heroe-tarjeta/heroe-tarjeta.component';


@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HeroeComponent,
    HeroesComponent,
    HomeComponent,
    NavbarComponent,
    NoFound404Component,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
