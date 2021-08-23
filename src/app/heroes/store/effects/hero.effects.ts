import { HeroesService } from '../../services/heroes.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as heroActions from '../actions/heroes.actions';
import * as heroApiActions from '../actions/heroes.api.actions';

import { map, mergeMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class HeroEffects {
  getHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroActions.loadHeroes),
      mergeMap((_) => {
        return this.heroesService.getHeroes().pipe(
          map((heroes) => {
            return heroApiActions.loadHeroesSuccess({ payload: heroes });
          }),
          catchError((error) => {
            return of(heroApiActions.loadHeroesFailure(error));
          })
        );
      })
    )
  );

  getHeroById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroActions.getHeroById),
      mergeMap((action) => {
        return this.heroesService.getHero(action.heroId).pipe(
          map((data) => {
            return heroApiActions.getHeroByIdSuccess({ payload: data });
          }),
          catchError((error) => {
            return of(heroApiActions.getHeroByIdFailure(error));
          })
        );
      })
    );
  });

  AddHeroes$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(heroActions.addHero),
      mergeMap((action) => {
        return this.heroesService.addHero(action.payload).pipe(
          map((data) => {
            return heroApiActions.addHeroSuccess({ payload: data });
          }),
          catchError((error) => {
            return of(heroApiActions.addHeroFailure(error));
          })
        );
      })
    )
  );

  UpdateHeroes$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroActions.updateHero),
      mergeMap((action) => {
        return this.heroesService.updateHero(action.payload).pipe(
          map(() => {
            return heroApiActions.updateHeroSuccess({
              payload: action.payload,
            });
          }),
          catchError((error) => {
            return of(heroApiActions.updateHeroFailure(error));
          })
        );
      })
    );
  });

  RemoveHeroes$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(heroActions.removeHero),
      mergeMap((action) => {
        return this.heroesService.deleteHero(action.payload.id).pipe(
          map(() => {
            return heroApiActions.removeHeroSuccess({
              payload: action.payload,
            });
          }),
          catchError((error) => {
            return of(heroApiActions.removeHeroFailure(error));
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private heroesService: HeroesService
  ) {}
}
