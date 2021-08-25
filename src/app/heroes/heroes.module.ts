import { HeroEffects } from './store/effects/hero.effects';
import { EffectsModule } from '@ngrx/effects';
import { heroesReducer, featureKey } from './store/reducers/heroes.reducer';
import { StoreModule } from '@ngrx/store';
import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHeroDialogComponent } from './create-hero-dialog/create-hero-dialog.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesMenuComponent } from './heroes-menu/heroes-menu.component';
import { HeroesComponent } from './heroes.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HeroDetailsViewComponent } from './hero-details-view/hero-details-view.component';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailsComponent,
    HeroesMenuComponent,
    CreateHeroDialogComponent,
    HeroDetailsViewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CdkAccordionModule,
    SharedModule,
    HeroesRoutingModule,
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
