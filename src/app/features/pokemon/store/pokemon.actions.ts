import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../models/pokemon.model';

export const loadPokemon = createAction(
  '[Pokemon] Load Pokemon',
  props<{ offset: number; limit: number }>()
);

export const loadPokemonSuccess = createAction(
  '[Pokemon] Load Pokemon Success',
  props<{ pokemon: Pokemon[] }>()
);

export const loadPokemonFailure = createAction(
  '[Pokemon] Load Pokemon Failure',
  props<{ error: string }>()
);
