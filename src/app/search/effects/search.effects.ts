import { Hero } from '../../shared/models/hero';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  debounceTime,
  map,
  mergeMap,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs/operators';
import { SearchService } from '../search.service';
import * as searchActions from '../actions/search.actions';
import { of } from 'rxjs';

@Injectable()
export class SearchEffects {
  SearchHeroes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchActions.searchHero),
      debounceTime(500),
      switchMap(({ query }) => {
        const nextSearch$ = this.actions$.pipe(
          ofType(searchActions.searchHero),
          skip(1)
        );
        return this.searchService.searchHero(query).pipe(
          takeUntil(nextSearch$),
          map((heroes: Hero[]) => {
            return searchActions.searchHeroSuccess({ heroes });
          }),
          catchError((error) => {
            return of(searchActions.searchHeroFailure(error));
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) {}
}
