import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PokemonService } from '../services/pokemon.service';
import { loadPokemon, loadPokemonSuccess, loadPokemonFailure } from './pokemon.actions';

@Injectable()
export class PokemonEffects {
  constructor(private actions$: Actions, private pokemonService: PokemonService) {}

  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemon),
      mergeMap(({ offset, limit }) =>
        this.pokemonService.fetchPokemon(offset, limit).pipe(
          map((pokemon) => loadPokemonSuccess({ pokemon })),
          catchError((error) => of(loadPokemonFailure({ error: error.message })))
        )
      )
    )
  );
}
