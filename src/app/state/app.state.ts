import { Hero } from '../shared/models/hero';

export interface AppState {
  heroes: ReadonlyArray<Hero>;
}
