import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPokemon } from '../../store/pokemon.actions';
import { PokemonState } from '../../store/pokemon.reducer';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemon$: Observable<Pokemon[]>;
  loading!: boolean;
  error!: string | null;
  offset = 0;
  limit = 20;

  constructor(private store: Store<{ pokemon: PokemonState }>) {
    this.pokemon$ = this.store.select((state) => state.pokemon.pokemon);
    this.store.select((state) => state.pokemon.loading).subscribe((loading) => (this.loading = loading));
    this.store.select((state) => state.pokemon.error).subscribe((error) => (this.error = error));
  }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    this.store.dispatch(loadPokemon({ offset: this.offset, limit: this.limit }));
    this.offset += this.limit;
  }
}
