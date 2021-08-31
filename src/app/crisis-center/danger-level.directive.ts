import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dangerLevel]',
})
export class DangerLevelDirective implements OnInit {
  @Input() dangerLevel!: number;
  constructor(private elRef: ElementRef) {}
  ngOnInit(): void {
    const level = this.dangerLevel;

    if (level <= 25) {
      this.elRef.nativeElement.style.color = 'yellow';
    } else if (level <= 50) {
      this.elRef.nativeElement.style.color = 'orange';
    } else {
      this.elRef.nativeElement.style.color = 'red';
    }
  }
}
