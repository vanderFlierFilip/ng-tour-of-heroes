import { Hero } from '../shared/models/hero';
import { createAction, props } from '@ngrx/store';

export const addHero = createAction(
  '[Heroes], Add Hero',

  props<{ Hero: Hero }>()
);

export const removeHero = createAction(
  '[Heroes], Remove Hero',

  props<{ heroId: Hero }>()
);

export const retrieveHeroesList = createAction(
  '[Heroes/API], Retrieve Heroes Success',

  props<{ Hero: Hero[] }>()
);
