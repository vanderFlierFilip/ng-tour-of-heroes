import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { SpinnerComponent } from './components/spinner.component';

@NgModule({
  declarations: [SpinnerComponent, PageNotFoundComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SpinnerComponent, PageNotFoundComponent],
})
export class SharedModule {}
