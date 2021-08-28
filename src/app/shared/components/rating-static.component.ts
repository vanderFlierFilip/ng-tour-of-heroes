import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hrs-rating-static',
  template: ` <mat-icon *ngFor="let i of ratingArr">star</mat-icon> `,
  styles: [],
})
export class RatingStaticComponent implements OnInit {
  @Input() setRating!: number;
  ratingArr!: Array<number>;

  constructor() {}

  ngOnInit(): void {
    this.ratingArr = Array(this.setRating).fill(0);
  }
}
