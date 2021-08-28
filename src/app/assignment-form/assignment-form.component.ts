import { HeroesService } from './../heroes/services/heroes.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Hero } from '@ng-heroes/shared/models/hero';

@Component({
  selector: 'hrs-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.scss'],
})
export class AssignmentFormComponent implements OnInit {
  heroes!: Hero[];
  form!: FormGroup;
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });

    this.form = new FormGroup({
      emergency: new FormControl(''),
      location: new FormControl(''),
      date: new FormControl(''),
      dangerLevel: new FormControl(''),
      hero: new FormControl(''),
    });
  }
}
