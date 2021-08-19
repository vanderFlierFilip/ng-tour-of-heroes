import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../shared/models/hero';

@Component({
  selector: 'hrs-search-hero-mobile',
  templateUrl: './search-hero-mobile.component.html',
  styleUrls: ['./search-hero-mobile.component.scss'],
})
export class SearchHeroMobileComponent implements OnInit {
  showCondition = true;

  @Input() heroes!: Hero[];

  @Output() searchEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  showSearch(): void {
    this.showCondition = !this.showCondition;
  }

  search(event: InputEvent): void {
    if (!event.data) {
      return;
    }
    this.searchEvent.emit(event.data);
  }
}
