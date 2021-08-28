import { Hero } from '@ng-heroes/shared/models/hero';
import * as heroActions from '../actions/heroes.actions';
import * as heroApiActions from '../actions/heroes.api.actions';

import { createReducer, on } from '@ngrx/store';

export const featureKey = 'heroes';

export interface HeroesState {
  heroList: Hero[];
  hero: Hero;
  loading: boolean;
  error: Error;
  heroName: string;
  editMode: boolean;
  heroRating: number;
}

export const initialState: HeroesState = {
  heroList: [],
  hero: { id: 0, name: '', rating: 0, assignments: [] },
  loading: false,

  error: new Error(),
  heroName: '',
  editMode: false,
  heroRating: 0,
};

export const heroesReducer = createReducer(
  initialState,
  on(heroActions.loadHeroes, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(heroApiActions.loadHeroesSuccess, (state, action) => {
    return {
      ...state,
      heroList: action.payload,
      loading: false,
    };
  }),
  on(heroApiActions.addHeroFailure, (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  }),
  on(heroActions.addHero, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(heroApiActions.addHeroSuccess, (state, action) => {
    return {
      ...state,
      heroList: [...state.heroList, action.payload],
      loading: false,
    };
  }),
  on(heroApiActions.addHeroFailure, (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  }),
  on(heroActions.removeHero, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(heroApiActions.removeHeroSuccess, (state, action) => {
    return {
      ...state,
      heroList: state.heroList.filter((hero) => hero.id !== action.payload.id),
      loading: false,
    };
  }),
  on(heroApiActions.removeHeroFailure, (state, action) => {
    return {
      ...state,
      error: action.payload,
      loading: false,
    };
  }),
  on(heroActions.updateHero, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(heroApiActions.updateHeroSuccess, (state, action) => {
    return {
      ...state,
      ...state.heroList.filter((hero) => hero.id !== action.payload.id),
      heroList: [...state.heroList, action.payload],
      loading: false,
    };
  }),
  on(heroApiActions.updateHeroFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: false,
    };
  }),
  on(heroActions.getHeroById, (state, action) => {
    return {
      ...state,
      loading: true,
      editMode: false,
    };
  }),
  on(heroApiActions.getHeroByIdSuccess, (state, action) => {
    return {
      ...state,
      hero: state.heroList.find(
        (hero) => hero.id === action.payload.id
      ) as Hero,
      loading: false,
      heroName: action.payload.name,
      editMode: true,
      heroRating: action.payload.rating,
    };
  }),
  on(heroApiActions.getHeroByIdFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
      loading: false,
    };
  })
);

export const selectHeroesList = (state: HeroesState) => state.heroList || [];
export const selectLoading = (state: HeroesState) => state.loading;
export const selectHero = (state: HeroesState) => state.hero;
export const selectHeroName = (state: HeroesState) => state.heroName!;
export const selectEditModeValue = (state: HeroesState) => state.editMode!;
export const selectHeroRating = (state: HeroesState) => state.heroRating;
