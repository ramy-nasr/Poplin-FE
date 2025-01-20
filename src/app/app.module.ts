import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './features/pokemon/components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './features/pokemon/components/pokemon-card/pokemon-card.component';
import { pokemonReducer } from './features/pokemon/store/pokemon.reducer';
import { PokemonEffects } from './features/pokemon/store/pokemon.effects';
import { PokemonModule } from './features/pokemon/pokemon.module';
import { AppRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

@NgModule({
  declarations: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ pokemon: pokemonReducer }),
    EffectsModule.forRoot([PokemonEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
