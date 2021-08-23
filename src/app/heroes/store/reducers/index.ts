// import * as fromSearch from '../../../search/reducers/search.reducer';
// import * as fromHeroes from './heroes.reducer';
// import { Action, combineReducers } from '@ngrx/store';

// export const heroesFeatureKey = 'heroes';

// export interface HeroesState {
//   [fromHeroes.featureKey]: fromHeroes.HeroesState;
//   [fromSearch.searchFeatureKey]: fromSearch.searchState;
// }

// export interface State {
//   [heroesFeatureKey]: HeroesState;
// }

// export function reducers(state: HeroesState | undefined, action: Action) {
//   return combineReducers({
//     [fromHeroes.featureKey]: fromHeroes.heroesReducer,
//     [fromSearch.searchFeatureKey]: fromSearch.reducer,
//   })(state, action);
// }
// // export const selectSearchResults = (state: State) => state.heroes;
