import { MessagesService } from '../messages/messages.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Hero } from '../shared/models/hero';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  heroesUrl = 'https://localhost:5001/api/Heroes/search';

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
  ) {}
  searchHero(term: string): Observable<Hero[]> {
    if (term === '') {
      return of([]);
    }
    return this.http
      .get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
      .pipe(
        tap((x) =>
          x.length
            ? this.log(`Found heroes ${term}`)
            : this.log(`no heroes matching ${term}`)
        )
      );
  }

  private log(message: string) {
    this.messagesService.add(message);
  }
}
