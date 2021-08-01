import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from './side-nav.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of heroes';
}
