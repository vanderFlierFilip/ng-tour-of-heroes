import { CrisisFormComponent } from './containers/crisis-form.component';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './containers/crisis-center.component';
import { CrisisFormViewComponent } from './components/crisis-form-view/crisis-form-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrisesViewComponent } from './components/crises-view/crises-view.component';
import { DangerLevelDirective } from './danger-level.directive';
import { DangerLvlPipe } from './danger-lvl.pipe';

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisFormComponent,
    CrisisFormViewComponent,
    CrisesViewComponent,
    DangerLevelDirective,
    DangerLvlPipe,
  ],
  imports: [
    CommonModule,
    CrisisCenterRoutingModule,
    MaterialModule,

    ReactiveFormsModule,
  ],
})
export class CrisisCenterModule {}
