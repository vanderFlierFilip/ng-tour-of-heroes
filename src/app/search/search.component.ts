import * as fromSearch from './reducers/search.reducer';
import * as fromSelector from './selectors/search.selectors';

import { searchHero } from './actions/search.actions';
import { SearchService } from './search.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { Hero } from '../shared/models/hero';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'hrs-search',
  template: `
    <hrs-search-hero
      *ngIf="!viewportSize"
      (searchEvent)="search($event)"
      [heroes]="heroes$ | async"
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

  heroes$!: Observable<Hero[]>;

  public searchTerms = new Subject<string>();

  constructor(
    private searchService: SearchService,
    private router: Router,
    private store: Store<fromSearch.searchState>
  ) {}

  search(term: string): void {
    this.searchTerms.next(term);
    this.store.dispatch(searchHero({ query: term }));
    this.heroes$ = this.store.select(fromSelector.heroesResults);
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      this.searchTerms.next('');
    });
  }
}
