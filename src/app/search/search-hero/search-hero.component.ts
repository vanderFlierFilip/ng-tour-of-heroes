import { Observable, Subject } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/shared/models/hero';

@Component({
  selector: 'hrs-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss'],
})
export class SearchHeroComponent implements OnInit {
  condition = true;

  @Input() heroes!: Hero[] | null;

  @Output() searchEvent = new EventEmitter<string>();
  public searchTerms = new Subject<string>();

  constructor() {}

  ngOnInit(): void {}

  toggleList() {
    this.condition = !this.condition;
  }

  search(value: string) {
    this.searchEvent.emit(value);
  }
}
