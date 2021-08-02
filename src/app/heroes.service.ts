import { MessagesService } from './messages.service';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, retry, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content Type': 'application/json' }),
  };
  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => {
        const message = 'Heroes Service: fetched heroes';
        this.log(message);
      }),
      catchError(this.handleError<Hero[]>('getHeroes', [])),
      shareReplay()
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
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => {
        const message = `Heroes Service: updated hero with id: ${hero.id}`;
        this.log(message);
      }),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => {
        const message = `Heroes Service: added a new hero ${hero.name} with id ${hero.id}`;
        this.log(message);
      }),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
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
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`Found heroes ${term}`)
          : this.log(`no heroes matching ${term}`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  // helper methods
  private log(message: string) {
    this.messagesService.add(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
