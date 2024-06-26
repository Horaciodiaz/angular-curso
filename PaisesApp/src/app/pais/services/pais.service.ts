import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private params: HttpParams = new HttpParams()
    .set( "fields", "name,capital,flags,population,ccn3")

  constructor(private http: HttpClient) { }

  buscarPais( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ termino }`
    return this.http.get<Country[]>(url, { params: this.params });
  }

  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`
    return this.http.get<Country[]>(url, { params: this.params });
  }

  getPaisPorAlpha( id: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/alpha/${ id }`
    return this.http.get<Country[]>(url);
  }

  porRegion( region: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/region/${ region }`
    return this.http.get<Country[]>(url, { params: this.params })
  }
}
