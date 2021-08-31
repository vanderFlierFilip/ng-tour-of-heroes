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
  //TODO: Add colors to the element that adhere to material design
  // https://material.io/resources/color/#!/?view.left=0&view.right=0

  changeColor() {
    const rating = this.hrsStarColor;
    const el = this.elRef.nativeElement;

    switch (rating) {
      case 1:
        el.style.color = 'red';
        break;
      case 2:
        el.style.color = 'yellow';
        break;
      case 3:
        el.style.color = 'pink';
        break;
      case 4:
        el.style.color = 'green';
        break;
      case 5:
        el.style.color = 'gold';
        break;
      default:
        el.style.color = 'blue';
    }
  }
}
