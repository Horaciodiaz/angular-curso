import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  
  @Input() nuevo: Personaje = {
    name: '',
    power: 0
  };

  constructor(private dbzService: DbzService){}

  agregar(): void{
    if(this.nuevo.name.trim().length === 0 ) return;
    console.log(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      name: '',
      power: 0
    }
  }
}
