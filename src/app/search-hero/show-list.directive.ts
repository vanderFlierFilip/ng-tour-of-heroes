import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[showList]',
})
export class ShowListDirective {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  @HostListener('mouseover') mouseover() {
    this.renderer.setStyle(this.elRef.nativeElement, 'opacity', 1);
  }
}
