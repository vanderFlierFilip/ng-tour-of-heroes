import { PageNotFoundComponent } from './../shared/components/page-not-found.component';
import { HeroesComponent } from './containers/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailsComponent } from './containers/hero-details.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
