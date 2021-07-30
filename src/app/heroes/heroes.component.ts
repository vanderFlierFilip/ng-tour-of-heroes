import { HEROES } from './../mock-heroes';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { HeroesService } from '../heroes.service';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'hrs-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];
  isSelected = false;
  constructor(
    private heroesService: HeroesService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
    this.messagesService.add(
      `HeroesComponent: selected hero with id ${hero.id}`
    );
  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
