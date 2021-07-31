import { MessagesService } from './messages.service';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private messagesService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    let heroes = of(HEROES);
    this.messagesService.add('Heroes Service: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messagesService.add(
      `Heroes Service: fetched hero with id: ${hero.id}`
    );
    return of(hero);
  }
}
