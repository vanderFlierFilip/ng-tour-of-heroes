import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from './reducers/heroes.reducer';

export const heroesSelector = createFeatureSelector<fromStore.HeroesState>(
  fromStore.featureKey
);

export const heroes = createSelector(
  heroesSelector,
  fromStore.selectHeroesList
);
export const hero = createSelector(heroesSelector, fromStore.selectHero);

export const loading = createSelector(heroesSelector, fromStore.selectLoading);

export const heroName = createSelector(
  heroesSelector,
  fromStore.selectHeroName
);

export const editMode = createSelector(
  heroesSelector,
  fromStore.selectEditModeValue
);
export const selectHeroRating = createSelector(
  heroesSelector,
  fromStore.selectHeroRating
);
