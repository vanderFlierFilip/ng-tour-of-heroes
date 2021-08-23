import { createReducer, on } from '@ngrx/store';
import { Hero } from 'src/app/shared/models/hero';

import * as searchActions from '../actions/search.actions';

export const searchFeatureKey = 'search';

export interface searchState {
  heroes: Hero[];
  query: string;
  error: string;
}

const initialState: searchState = {
  heroes: [],
  query: '',
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(searchActions.searchHero, (state, { query }) => {
    return query === ''
      ? {
          heroes: [],
          error: '',
          query,
        }
      : {
          ...state,
          error: '',
          query,
        };
  }),
  on(searchActions.searchHeroSuccess, (state, { heroes }) => {
    return {
      heroes: heroes,

      error: '',
      query: state.query,
    };
  }),
  on(searchActions.searchHeroFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  })
);

export const selectSearchResults = (state: searchState) => state.heroes;
