import { Crisis } from '../../shared/models/crisis.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CrisisCenterService {
  url = 'api/crises';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Crisis[]>(this.url);
  }

  addCrisis(crisis: Crisis) {
    return this.http.post<Crisis>(this.url, crisis, this.httpOptions);
  }
}
