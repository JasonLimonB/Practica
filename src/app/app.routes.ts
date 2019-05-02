import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Components/about/about.component';
import { HeroeComponent } from './Components/heroe/heroe.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HomeComponent } from './Components/home/home.component';
import { NoFound404Component } from './Components/Shared/no-found404/no-found404.component';
import { BuscadorComponent } from './Components/buscador/buscador.component';

const APP_ROUTES: Routes = [
  { path: 'buscar/:termino', component: BuscadorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component:  AboutComponent},
  { path: 'heroes/:id', component:  HeroeComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', component: NoFound404Component }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
