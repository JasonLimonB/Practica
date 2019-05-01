import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../Servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private heroesServicio: HeroesService ) { }

  ngOnInit() {
    this.heroes = this.heroesServicio.getHeroes();
  }

}
