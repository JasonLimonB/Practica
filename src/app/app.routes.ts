import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { AboutComponent } from './Components/about/about.component';
import { NoFound404Component } from './Components/Shared/no-found404/no-found404.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'about', component:  AboutComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', component: NoFound404Component }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
