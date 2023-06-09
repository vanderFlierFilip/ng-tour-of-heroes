import { Crisis } from '../../shared/models/crisis.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrisisCenterService {
  url = 'https://localhost:5001/api/Crises';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private _crisesSubject = new BehaviorSubject<Array<Crisis>>([]);
  private crises$ = this._crisesSubject.asObservable();
  constructor(private http: HttpClient) {}
  refreshCrises() {
    this.getAllFromApi().subscribe(x => {
      this._crisesSubject.next(x)
    })
  }

  getAll() {
    return this.crises$;
  }

  getAllFromApi() {
    return this.http.get<Crisis[]>(this.url);
  }

  addCrisis(crisis: Crisis) {
    return this.http.post<Crisis>(this.url, crisis, this.httpOptions)
      // .pipe(
      //   tap(res => {
      //     const newCrises = [...this._crisesSubject.getValue(), res];
      //     this._crisesSubject.next(newCrises);
      //   })
      // );
  }
}
