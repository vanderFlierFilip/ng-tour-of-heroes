import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hrs-spinner',
  template: `<mat-spinner *ngIf="condition"></mat-spinner> `,
  styles: [],
})
export class SpinnerComponent implements OnInit {
  @Input()
  condition?: boolean | null;
  constructor() {}

  ngOnInit(): void {}
}
