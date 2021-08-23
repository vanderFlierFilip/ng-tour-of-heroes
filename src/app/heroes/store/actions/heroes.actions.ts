import { Hero } from '../../../shared/models/hero';
import { createAction, props } from '@ngrx/store';

export const loadHeroes = createAction('[Heroes], Load Heroes');

export const addHero = createAction(
  '[Heroes], Add Hero',

  props<{ payload: Hero }>()
);

export const removeHero = createAction(
  '[Heroes], Remove Hero',

  props<{ payload: Hero }>()
);

export const updateHero = createAction(
  '[Heroes], Update Hero',

  props<{ payload: Hero }>()
);

export const getHeroById = createAction(
  '[Heroes], Get Hero By Id',
  props<{ heroId: number }>()
);
