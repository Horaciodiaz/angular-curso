import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent {

  pais!: Country;
  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) {}
  ngOnInit(){
    this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha(id) ),
        tap(console.log)//eso muestra por consola lo que recibe el subscribe
      )
      .subscribe( pais => this.pais = pais[0])
  }
}
