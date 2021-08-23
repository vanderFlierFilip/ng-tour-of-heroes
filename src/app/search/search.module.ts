import { SearchEffects } from './effects/search.effects';
import { EffectsModule } from '@ngrx/effects';
import { HeroesModule } from './../heroes/heroes.module';
import { RouterModule } from '@angular/router';
import { SearchHeroComponent } from './search-hero/search-hero.component';
import { SearchComponent } from './search.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHeroMobileComponent } from './search-hero-mobile/search-hero-mobile.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './reducers/search.reducer';

@NgModule({
  declarations: [
    SearchComponent,
    SearchHeroComponent,
    SearchHeroMobileComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    MaterialModule,
    RouterModule,
    HeroesModule,
    StoreModule.forFeature('search', fromStore.reducer),
    EffectsModule.forFeature([SearchEffects]),
  ],
  exports: [SearchComponent],
})
export class SearchModule {}
