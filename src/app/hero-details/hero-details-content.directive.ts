import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[heroDetailsContent]',
})
export class HeroDetailsContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
