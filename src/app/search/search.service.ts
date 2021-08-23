import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Hero } from '../shared/models/hero';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) {}
  searchHero(term: string): Observable<Hero[]> {
    if (!term.trim) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(
        (x) => x.length
        // ? this.log(`Found heroes ${term}`)
        // : this.log(`no heroes matching ${term}`)
      )
    );
  }
}