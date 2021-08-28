import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ratingColor]',
})
export class RatingColorDirective {
  constructor(private elRef: ElementRef) {
    elRef.nativeElement;
  }
}
