import { HeroesService } from './../../heroes/services/heroes.service';
import { Crisis } from '../../shared/models/crisis.model';
import { CrisisCenterService } from './../services/crisis-center.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'hrs-crisis-center',
  template: ` <hrs-crises-view [crises]="crises"></hrs-crises-view> `,
  styles: [],
})
export class CrisisCenterComponent implements OnInit {
  crises!: Crisis[];
  constructor(
    private crisisService: CrisisCenterService,
  ) {}

  ngOnInit(): void {
    this.crisisService.refreshCrises();
    this.crisisService.getAll().subscribe((crises) => {
      this.crises = crises;
      console.log(crises);
    });
  }
}
