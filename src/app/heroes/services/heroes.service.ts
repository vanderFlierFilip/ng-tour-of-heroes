import { MessagesService } from '../../messages/messages.service';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../../shared/models/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroesUrl = 'https://localhost:5001/api/Heroes';

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => {
        const message = 'Heroes Service: fetched heroes';
        this.log(message);
      })
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap((_) => {
        const message = `Heroes Service: fetched hero with id: ${id}`;
        this.log(message);
      }),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, hero).pipe(
      tap((_) => {
        const message = `Heroes Service: updated hero with id: ${hero.id}`;
        console.log(hero);

        this.log(message);
      }),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero).pipe(
      tap((newHero: Hero) => {
        const message = `Heroes Service: added a new hero ${hero.name} with id ${hero.id}`;
        this.log(message);
      }),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url).pipe(
      tap((_) => {
        const message = `Heroes Service: removed hero with id ${id}`;
        this.log(message);
      }),
      catchError(this.handleError<Hero>('removeHero'))
    );
  }

  searchHero(term: string): Observable<Hero[]> {
    if (!term.trim) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/search/?name=${term}`).pipe(
      tap((x) => {
        console.log(term);
        x.length
          ? this.log(`Found heroes ${term}`)
          : this.log(`no heroes matching ${term}`);
      }),

      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  // helper methods
  private log(message: string) {
    console.log(message);
    this.messagesService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
