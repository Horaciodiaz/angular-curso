import { Component } from '@angular/core';

import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorCapitalComponent {
  paises: Country[] = [];
  hayError: boolean = false;
  mostrarSugerencias: boolean = false;
  termino: string = '';
  paisesSugeridos: Country [] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital( termino )
      .subscribe( paises => {
        this.paises = paises;
      }, error => {
        this.hayError = true;
        this.paises = [];
      } )
  }

  sugerencias( termino: string ) {
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    if(termino !== ""){
      this.mostrarSugerencias = true;
      this.paisService.buscarCapital(termino)
        .subscribe(
          paises => 
            {
              this.paisesSugeridos = paises.splice(0, 5);
            }, error => {
              console.log(error);
              this.paisesSugeridos = [];
            }
        )
    }
    else {
      this.paisesSugeridos = [];
      this.mostrarSugerencias = false;
    }
  }
}
