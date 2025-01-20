import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    PokemonListComponent, 
    PokemonCardComponent 
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild([
      { path: '', component: PokemonListComponent }
    ])
  ]
})
export class PokemonModule {}
