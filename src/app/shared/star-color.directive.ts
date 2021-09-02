import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[hrsStarColor]',
})
export class StarColorDirective implements AfterViewInit {
  @Input() hrsStarColor!: number;
  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.changeColor();
  }
  @HostListener('mouseover') increaseSize() {}

  changeColor() {
    const rating = this.hrsStarColor;
    const el = this.elRef.nativeElement;

    switch (rating) {
      case 1:
        // red
        el.style.color = '#ba000d';
        break;
      case 2:
        // orange
        el.style.color = '#ff9800';
        break;
      case 3:
        el.style.color = '#8bc34a';
        break;
      case 4:
        el.style.color = '#e0e0e0';
        break;
      case 5:
        el.style.color = 'gold';
        break;
      default:
        el.style.color = 'blue';
    }
  }
}
