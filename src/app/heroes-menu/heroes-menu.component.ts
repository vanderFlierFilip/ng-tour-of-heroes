import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'hrs-heroes-menu',
  templateUrl: './heroes-menu.component.html',
  styleUrls: ['./heroes-menu.component.scss'],
})
export class HeroesMenuComponent implements OnInit {
  topHeroes?: Hero[];
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.getTopHeroes();
  }

  getTopHeroes() {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.topHeroes = heroes.slice(1, 5);
    });
  }
}
