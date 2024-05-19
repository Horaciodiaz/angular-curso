import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interface';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paisesPorRegion: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClassCss( region: string ): string{
    return ( region === this.regionActiva ) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
  activarRegion(region: string){
    if(region != this.regionActiva){
      this.paisesPorRegion = [];
      this.regionActiva = region;
      this.paisService.porRegion( region )
        .subscribe( paises => {
          this.paisesPorRegion = paises
        })
    }
  }
}
