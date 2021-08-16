import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Tour of heroes';
  appUrl = environment.apiUrl;
  subscribtion?: Subscription;

  constructor(private router: Router, private http: HttpClient) {
    this.subscribtion = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
        if (browserRefresh) {
          // this.http
          //   .get(this.appUrl + 'api/Application/Restart')
          //   .subscribe((res) => {
          //     console.log(res);
          //   });
        }
      }
    });
  }
  ngOnInit() {
    browserRefresh = browserRefresh;
    console.log('refreshed?:', browserRefresh);
  }
  ngOnDestroy(): void {
    browserRefresh = !browserRefresh;
  }
}
