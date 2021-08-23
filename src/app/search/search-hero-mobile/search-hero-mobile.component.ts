import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../shared/models/hero';

@Component({
  selector: 'hrs-search-hero-mobile',
  templateUrl: './search-hero-mobile.component.html',
  styleUrls: ['./search-hero-mobile.component.scss'],
})
export class SearchHeroMobileComponent implements OnInit {
  showCondition = true;

  @Input() heroes!: Hero[] | null;

  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  showSearch(): void {
    this.showCondition = !this.showCondition;
  }
}
