import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'hrs-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
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
