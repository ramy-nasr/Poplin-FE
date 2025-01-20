import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly API_URL = environment.pokemonApiUrl;

  constructor(private http: HttpClient) {}

  fetchPokemon(offset: number, limit: number): Observable<{ name: string; imageUrl: string }[]> {
    return  this.http.get<any>(`${this.API_URL}?offset=${offset}&limit=${limit}`).pipe(
      map((response) => response)
    );
  }
}
