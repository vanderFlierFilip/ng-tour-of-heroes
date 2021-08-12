import { Hero } from './../hero';
import { AppState } from './app.state';
import { createSelector } from '@ngrx/store';

export const selectHeroes = createSelector(
  (state: AppState) => state.heroes,
  (heroes: ReadonlyArray<Hero>) => heroes
);
