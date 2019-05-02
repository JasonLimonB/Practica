import { Component, OnInit } from '@angular/core';

// Importando el servicio para el uso de la interfaz
import { HeroesService } from '../../Servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private hServicio: HeroesService,
               private router: Router ) {

    this.activatedRoute.params.subscribe( params => {
      console.log(params.id);
      this.heroe = this.hServicio.getHeroe(params.id);
    });

   }

  ngOnInit() {
  }

  volver() {
    this.router.navigate(['/heroes']);
  }

}
