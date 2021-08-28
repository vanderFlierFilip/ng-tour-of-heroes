import {
  AfterContentChecked as AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'hrs-rating',
  template: `
    <mat-icon
      *ngFor="let i of maxRatingArr; let index = index"
      (mouseenter)="handleMouseEnter(index)"
      (mouseleave)="handleMouseLeave()"
      (click)="rate(index)"
      [ngClass]="{
        checked: selectedRate > index
      }"
      >star</mat-icon
    >
  `,
  styles: [
    `
      .checked {
        color: orange;
      }
      .info {
        color: white;
      }
      mat-icon {
        cursor: pointer;
      }
    `,
  ],
})
export class RatingComponent implements OnInit {
  @Input() maxRating = 5;
  maxRatingArr: Array<any> = [];
  @Input() selectedRate!: number;
  @Output() onRating: EventEmitter<number> = new EventEmitter<number>();
  previousRate = 0;
  @Input() editMode!: boolean;
  @Input() rating!: number;

  constructor() {
    console.log(this.editMode);
  }

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number) {
    this.selectedRate = index + 1;
  }

  handleMouseLeave() {
    if (this.previousRate !== 0) {
      this.previousRate = this.rating;
    } else this.previousRate = 0;
  }

  rate(index: number) {
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }
}
