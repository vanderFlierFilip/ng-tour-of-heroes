import { CrisisCenterService } from './../services/crisis-center.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '@ng-heroes/heroes/services/heroes.service';
import { Hero } from '@ng-heroes/shared/models/hero';
import { Crisis } from '@ng-heroes/shared/models/crisis.model';

@Component({
  selector: 'hrs-crisis-form',
  template: `
    <hrs-crisis-form-view
      [heroes]="heroes!"
      [form]="crisisForm"
      (submitEvent)="onSubmit($event)"
    ></hrs-crisis-form-view>
  `,
  styles: [],
})
export class CrisisFormComponent implements OnInit {
  heroes!: Hero[];
  crisisForm!: FormGroup;
  crises!: Crisis[];
  constructor(
    private heroesService: HeroesService,
    private fb: FormBuilder,
    private crisisService: CrisisCenterService
  ) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
    this.crisisService.getAll().subscribe((crises) => (this.crises = crises));
    this.crisisForm = this.fb.group({
      emergency: [null, Validators.required],
      location: [null, Validators.required],
      dangerLevel: [null, Validators.required],
      description: [null, Validators.required],
      hero: [null, Validators.required],
    });
  }

  onSubmit(crisis: Crisis) {
    if (this.crisisForm.valid) {
      this.crisisService.addCrisis(crisis).subscribe((crisis) => {
        this.crises.push(crisis);
      });
    }
  }
}
