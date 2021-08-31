import * as fromSearch from './reducers/search.reducer';
import * as fromSelector from './selectors/search.selectors';

import { hideList, searchHero } from './actions/search.actions';
import { Component, Input, OnInit } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';

import { Hero } from '../shared/models/hero';
import { Store } from '@ngrx/store';

@Component({
  selector: 'hrs-search',
  template: `
    <hrs-search-hero
      *ngIf="!viewportSize"
      (searchEvent)="search($event)"
      [heroes]="heroes$ | async"
      [condition]="showList$ | async"
    ></hrs-search-hero>

    <hrs-search-hero-mobile
      *ngIf="viewportSize"
      (searchEvent)="search($event)"
      [heroes]="heroes$ | async"
    >
    </hrs-search-hero-mobile>
  `,
  styles: [],
})
export class SearchComponent implements OnInit {
  @Input() viewportSize?: any;
  showList$ = this.store.select(fromSelector.showListValue);

  heroes$!: Observable<Hero[]>;
  heroesLength$!: number;
  public searchTerms = new Subject<string>();

  constructor(private store: Store<fromSearch.SearchState>) {}

  search(term: string): void {
    this.searchTerms.next(term);
    this.store.dispatch(searchHero({ query: term }));
    this.heroes$ = this.store.select(fromSelector.heroesResults);
  }
  ngOnInit() {
    const clicks = fromEvent(document, 'click');
    clicks.subscribe(() => {
      this.store.dispatch(hideList());
    });
  }
}
