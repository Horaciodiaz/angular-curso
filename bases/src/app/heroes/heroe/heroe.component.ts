import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  
  name: string = 'Ironman';
  age: number = 45;

  get nombreCapitalizado(): string {
    return this.name.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.name} - ${this.age}`;
  }

  cambiarNombre(): void {
    this.name = 'Spiderman';
  }

  cambiarEdad(): void {
    this.age = 30;
  }
}
