import { HeroFormComponent } from './hero-form/hero-form.component';
import { PageNotFoundComponent } from './../shared/components/page-not-found.component';
import { HeroesComponent } from './heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailsComponent },
  { path: 'test-form', component: HeroFormComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
