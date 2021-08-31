import { CrisisFormComponent } from './containers/crisis-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterComponent } from './containers/crisis-center.component';

const routes: Routes = [
  { path: 'crisis-center', component: CrisisCenterComponent },
  { path: 'crisis-form', component: CrisisFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrisisCenterRoutingModule {}
