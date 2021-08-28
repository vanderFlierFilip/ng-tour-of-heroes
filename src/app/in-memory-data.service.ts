import { Injectable } from '@angular/core';
import { Hero } from './shared/models/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  constructor() {}
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice', rating: 2 },
      { id: 12, name: 'Narco', rating: 4 },
      { id: 13, name: 'Bombasto', rating: 4 },
      { id: 14, name: 'Celeritas', rating: 1 },
      { id: 15, name: 'Magneta', rating: 5 },
      { id: 16, name: 'RubberMan', rating: 3 },
      { id: 17, name: 'Dynama', rating: 5 },
      { id: 18, name: 'Dr IQ', rating: 3 },
      { id: 19, name: 'Magma', rating: 1 },
      { id: 20, name: 'Tornado', rating: 2 },
    ];
    return { heroes };
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 10;
  }
}
