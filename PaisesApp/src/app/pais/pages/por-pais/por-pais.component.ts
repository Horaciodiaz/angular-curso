import { Component } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  mostrarSugerencias: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country [] = [];

  constructor( private paisService: PaisService ){}

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(termino).subscribe(
      paises => {
        this.paises = paises;
      }, error => {
        console.log('Error');
        this.hayError = true;
        this.paises = [];
        console.log(error);
      }
    );
  }

  sugerencias( termino: string ) {
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    if(termino !== ""){
      this.mostrarSugerencias = true;
      this.paisService.buscarPais(termino)
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
