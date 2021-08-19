import { HeroesModule } from '../heroes/heroes.module';
import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MaterialModule,
    HeroesModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
