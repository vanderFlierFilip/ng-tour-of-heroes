import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Tour of heroes';
  subscribtion?: Subscription;

  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit() {
    browserRefresh = browserRefresh;
    console.log('refreshed?:', browserRefresh);
  }
  ngOnDestroy(): void {
    browserRefresh = !browserRefresh;
  }
}
