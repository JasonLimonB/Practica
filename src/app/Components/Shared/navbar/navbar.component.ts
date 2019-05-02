import { Component, OnInit } from '@angular/core';

// Importamos el servicio para la busqueda
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor( private router: Router ) {

   }



  ngOnInit() {
  }

  buscarHeroe( termino: string ) {
    this.router.navigate(['buscar', termino]);
  }

}
