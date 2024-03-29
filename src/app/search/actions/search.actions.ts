import { createAction, props } from '@ngrx/store';
import { Hero } from '@ng-heroes/shared/models/hero';

export const searchHero = createAction(
  '[Search] Search',
  props<{ query: string }>()
);

export const searchHeroSuccess = createAction(
  '[Search / API] Search Success ',
  props<{ heroes: Array<Hero> }>()
);
export const searchHeroFailure = createAction(
  '[Search / API] Search Failure ',
  props<{ error: string }>()
);
export const hideList = createAction('[Search] Hide Search List ');
