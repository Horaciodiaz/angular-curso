import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'KG8cB0vouw5kOPWBfRsf2ZGHzk4vqdvl';
  private _historial: string[] = [];
  private url: string = 'https://api.giphy.com/v1/gifs';
  public resultados: Gif[] = [];

  get historial(): string[] {
    return [...this._historial];
  }
  
  constructor(private http: HttpClient){
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultado')!) || [];
  }

  buscarGifs( query: string ){
    
    query = query.trim().toLowerCase();
    
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));

    }

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('q', query)
      .set('limit', '10');
    console.log(params.toString())
    this.http.get<SearchGifsResponse>(`${this.url}/search`,{ params }).subscribe(
      ( res: SearchGifsResponse ) => {
        this.resultados = res.data;
        localStorage.setItem('resultado', JSON.stringify(this.resultados));
      }
    )

  }
}
