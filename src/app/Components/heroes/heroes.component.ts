import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../Servicios/heroes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private heroesServicio: HeroesService,
              private router: Router ) { }

  ngOnInit() {
    this.heroes = this.heroesServicio.getHeroes();
  }

  verHeroe( i: number ) {
    this.router.navigate(['/heroes', i]);
  }

}
