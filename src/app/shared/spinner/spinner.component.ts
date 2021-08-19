import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hrs-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  @Input()
  condition?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
