import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[msgModal]',
})
export class MsgModalDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
