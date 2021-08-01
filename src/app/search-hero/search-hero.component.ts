import { HeroesService } from './../heroes.service';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'hrs-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.scss'],
})
export class SearchHeroComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  constructor(private heroesService: HeroesService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.heroesService.searchHero(term))
    );
  }
}
