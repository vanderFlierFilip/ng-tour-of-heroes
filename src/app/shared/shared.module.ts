import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { SpinnerComponent } from './components/spinner.component';
import { RatingComponent } from './components/rating.component';
import { RatingStaticComponent } from './components/rating-static.component';
@NgModule({
  declarations: [
    SpinnerComponent,
    PageNotFoundComponent,
    RatingComponent,
    RatingStaticComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    SpinnerComponent,
    PageNotFoundComponent,
    RatingComponent,
    RatingStaticComponent,
  ],
})
export class SharedModule {}
