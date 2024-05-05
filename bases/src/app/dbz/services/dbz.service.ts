import { Injectable } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    
    private _personajes: Personaje[] = [
        {
            name: 'Goku',
            power: 15000,
        },
        {
            name: 'Vegeta',
            power: 7500,
        },
    ];
    
        get personajes(): Personaje[] {
            return [...this._personajes];
        }

    constructor() {}

    agregarPersonaje( personaje: Personaje):void {
        this._personajes.push(personaje);
    }

}
