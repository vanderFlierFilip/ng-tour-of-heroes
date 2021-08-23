import { Observable, Subject } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '@ng-heroes/shared/models/hero';

@Component({
  selector: 'hrs-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss'],
})
export class SearchHeroComponent implements OnInit {
  @Input() condition!: boolean | null;

  @Input() heroes!: Hero[] | null;
  @Input() heroesLength!: number;

  @Output() searchEvent = new EventEmitter<string>();
  public searchTerms = new Subject<string>();

  constructor() {}

  ngOnInit(): void {}

  search(value: string) {
    return this.searchEvent.emit(value);
  }
}
