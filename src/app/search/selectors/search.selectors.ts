import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from '../reducers/search.reducer';

export const searchSelector = createFeatureSelector<fromStore.searchState>(
  fromStore.searchFeatureKey
);

export const heroesResults = createSelector(
  searchSelector,
  fromStore.selectSearchResults
);
