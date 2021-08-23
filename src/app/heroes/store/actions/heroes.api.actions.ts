import { getHeroById } from './heroes.actions';
import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/shared/models/hero';

export const loadHeroesSuccess = createAction(
  '[Heroes / API], Load Heroes Success',

  props<{ payload: Array<Hero> }>()
);
export const loadHeroesFailure = createAction(
  '[Heroes / API], Load Heroes Failure',

  props<{ error: Error }>()
);
export const addHeroSuccess = createAction(
  '[Heroes / API], Add Hero Success',

  props<{ payload: Hero }>()
);
export const addHeroFailure = createAction(
  '[Heroes / API], Add Hero Failure',
  props<{ payload: Error }>()
);
export const removeHeroSuccess = createAction(
  '[Heroes / API], Remove Hero Success',
  props<{ payload: Hero }>()
);

export const removeHeroFailure = createAction(
  '[Heroes / API], Remove Hero Failure',
  props<{ payload: Error }>()
);

export const updateHeroSuccess = createAction(
  '[Heroes / API], Update Hero Success',
  props<{ payload: Hero }>()
);

export const updateHeroFailure = createAction(
  '[Heroes / API], Update Hero Failure',

  props<{ error: Error }>()
);

export const getHeroByIdSuccess = createAction(
  '[Heroes / API], Get Hero By Id Success',
  props<{ payload: Hero }>()
);

export const getHeroByIdFailure = createAction(
  '[Heroes / API], Get Hero By Id Failure',

  props<{ error: Error }>()
);
