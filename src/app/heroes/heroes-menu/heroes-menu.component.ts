import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../shared/models/hero';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'hrs-heroes-menu',
  templateUrl: './heroes-menu.component.html',
  styleUrls: ['./heroes-menu.component.scss'],
})
export class HeroesMenuComponent implements OnInit {
  topHeroes?: Hero[];
  isLoading = true;
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getTopHeroes();
  }

  getTopHeroes(): void {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.topHeroes = heroes.slice(1, 5);
      this.isLoading = !this.isLoading;
    });
  }
}
