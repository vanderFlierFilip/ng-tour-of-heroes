import { createReducer, on } from '@ngrx/store';
import { Hero } from '@ng-heroes/shared/models/hero';

import * as searchActions from '../actions/search.actions';

export const searchFeatureKey = 'search';

export interface SearchState {
  heroes: Hero[];
  query: string;
  error: string;
  showList: boolean;
}

const initialState: SearchState = {
  heroes: [],
  query: '',
  error: '',
  showList: false,
};

export const reducer = createReducer(
  initialState,
  on(searchActions.searchHero, (state, { query }) => {
    return query === ''
      ? {
          heroes: [],
          error: '',
          query,
          showList: false,
        }
      : {
          ...state,
          error: '',
          query,
          showList: true,
        };
  }),
  on(searchActions.searchHeroSuccess, (state, { heroes }) => {
    return {
      heroes: heroes,

      error: '',
      query: state.query,
      showList: true,
    };
  }),
  on(searchActions.searchHeroFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
    };
  })
);

export const selectSearchResults = (state: SearchState) => state.heroes;
export const selectShowList = (state: SearchState) => state.showList;
