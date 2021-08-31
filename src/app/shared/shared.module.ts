import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { SpinnerComponent } from './components/spinner.component';
import { RatingComponent } from './components/rating.component';
import { RatingStaticComponent } from './components/rating-static.component';
import { StarColorDirective } from './star-color.directive';
@NgModule({
  declarations: [
    SpinnerComponent,
    PageNotFoundComponent,
    RatingComponent,
    RatingStaticComponent,
    StarColorDirective,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    SpinnerComponent,
    PageNotFoundComponent,
    RatingComponent,
    RatingStaticComponent,
    StarColorDirective,
  ],
})
export class SharedModule {}
