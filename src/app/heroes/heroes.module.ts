import { HeroesRoutingModule } from './heroes-routing.module';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateHeroDialogComponent } from './create-hero-dialog/create-hero-dialog.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesMenuComponent } from './heroes-menu/heroes-menu.component';
import { HeroesComponent } from './heroes.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailsComponent,
    HeroesMenuComponent,
    CreateHeroDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CdkAccordionModule,
    SharedModule,
    HeroesRoutingModule,
  ],
  exports: [
    HeroesComponent,
    HeroDetailsComponent,
    HeroesMenuComponent,
    CreateHeroDialogComponent,
  ],
})
export class HeroesModule {}
