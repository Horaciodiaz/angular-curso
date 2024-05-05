import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  //esto permite tener acceso a todo el bloque html que tenga esa variable, en este caso un input
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;//ese ! significa que no va a ser nulo 

  constructor( private gifsService: GifsService){}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor)this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
