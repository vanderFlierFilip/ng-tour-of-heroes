import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Hero } from '../shared/models/hero';
import { HeroesService } from '../heroes/services/heroes.service';

@Component({
  selector: 'hrs-search',
  template: `
    <hrs-search-hero
      *ngIf="!viewportSize"
      (searchEvent)="search($event)"
      [heroes]="$any(heroes$ | async)"
    ></hrs-search-hero>

    <hrs-search-hero-mobile
      *ngIf="viewportSize"
      (searchEvent)="search($event)"
      [heroes]="$any(heroes$ | async)"
    >
    </hrs-search-hero-mobile>
  `,
  styles: [],
})
export class SearchComponent implements OnInit {
  @Input() viewportSize?: any;

  heroes$!: Observable<Hero[]>;

  public searchTerms = new Subject<string>();

  constructor(private heroesService: HeroesService, private router: Router) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),
      tap((term) => {
        console.log(term);
      }),
      switchMap((term: string) => this.heroesService.searchHero(term))
    );
    this.router.events.subscribe((event) => {
      this.searchTerms.next('');
    });
  }
}
