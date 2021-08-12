import { Hero } from './../hero';
import { retrieveHeroesList } from './heroes.actions';
import { createReducer, on } from '@ngrx/store';

export const initialState: ReadonlyArray<Hero> = [];

export const heroesReducer = createReducer(
  initialState,
  on(retrieveHeroesList, (state, { Hero }) => [...Hero])
);
