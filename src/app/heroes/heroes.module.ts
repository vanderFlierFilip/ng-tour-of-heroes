import { HeroesViewComponent } from './components/heroes-view/heroes-view.component';
import { HeroEffects } from './store/effects/hero.effects';
import { EffectsModule } from '@ngrx/effects';
import { heroesReducer, featureKey } from './store/reducers/heroes.reducer';
import { StoreModule } from '@ngrx/store';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHeroDialogComponent } from './components/create-hero-dialog/create-hero-dialog.component';
import { HeroDetailsComponent } from './containers/hero-details.component';
import { HeroesMenuComponent } from './components/heroes-menu/heroes-menu.component';
import { HeroesComponent } from './containers/heroes.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HeroDetailsViewComponent } from './components/hero-details-view/hero-details-view.component';
import { RatingColorDirective } from './directives/rating-color.directive';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailsComponent,
    HeroesMenuComponent,
    CreateHeroDialogComponent,
    HeroDetailsViewComponent,
    RatingColorDirective,
    HeroesViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CdkAccordionModule,
    SharedModule,
    HeroesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('heroes', heroesReducer),

    EffectsModule.forFeature([HeroEffects]),
  ],
  exports: [
    HeroesComponent,
    HeroDetailsComponent,
    HeroesMenuComponent,
    CreateHeroDialogComponent,
  ],
})
export class HeroesModule {}
