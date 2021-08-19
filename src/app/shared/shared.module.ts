import { MaterialModule } from './../material/material.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SpinnerComponent],
})
export class SharedModule {}
