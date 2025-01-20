import { createReducer, on } from '@ngrx/store';
import { loadPokemon, loadPokemonSuccess, loadPokemonFailure } from './pokemon.actions';
import { Pokemon } from '../models/pokemon.model';

export interface PokemonState {
  pokemon: Pokemon[];
  loading: boolean;
  error: string | null;
}

export const initialState: PokemonState = {
  pokemon: [],
  loading: false,
  error: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(loadPokemon, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadPokemonSuccess, (state, { pokemon }) => {
    console.log('Reducer received pokemon:', pokemon); 
    if (!Array.isArray(pokemon)) {
      console.error('Reducer received non-iterable pokemon:', pokemon); 
    }
    return {
      ...state,
      loading: false,
      pokemon: [...state.pokemon, ...pokemon],
    };
  }),
  on(loadPokemonFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
