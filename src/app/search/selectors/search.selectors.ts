import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStore from '../reducers/search.reducer';

export const searchSelector = createFeatureSelector<fromStore.SearchState>(
  fromStore.searchFeatureKey
);

export const heroesResults = createSelector(
  searchSelector,
  fromStore.selectSearchResults
);

export const showListValue = createSelector(
  searchSelector,
  fromStore.selectShowList
);
