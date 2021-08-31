import { RatingStaticComponent } from '../../shared/components/rating-static.component';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[ratingColor]',
})
export class RatingColorDirective implements AfterViewInit {
  @Input() rating!: number;
  el = this.elRef.nativeElement.querySelector('mat-icon');
  constructor(private elRef: ElementRef) {}
  ngAfterViewInit(): void {
    console.log(this.el);
  }
  ngOnInit(): void {
    console.log(this.el);
  }
}
