import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { SearchHeroMobileComponent } from './search-hero-mobile/search-hero-mobile.component';
import { SearchHeroComponent } from './search-hero/search-hero.component';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SearchComponent,
    SearchHeroComponent,
    SearchHeroMobileComponent,
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [SearchComponent],
})
export class SearchModule {}
