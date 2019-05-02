import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../Servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private heroesServicio: HeroesService  ) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesServicio.buscarHeroes( params.termino );
      console.log(this.heroes);
    });
  }

}
