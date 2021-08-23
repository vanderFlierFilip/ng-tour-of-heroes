import { HeroesService } from '../heroes/services/heroes.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../shared/models/hero';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'hrs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {}

  constructor(private heroesService: HeroesService) {}

  ngAfterViewInit(): void {}
}
