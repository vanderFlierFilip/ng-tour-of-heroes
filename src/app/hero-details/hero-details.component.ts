import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
// import { Location } from '@angular/common';

@Component({
  selector: 'hrs-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroesService // private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroById();
  }
  // TODO: Fix bug by implementing this logic in a parent component.
  getHeroById(): void {
    this.heroService
      .getHero(+this.route.snapshot.paramMap.get('id')!)
      .subscribe((hero) => {
        this.hero = hero;
      });
  }

  // TODO: ng-content this mf
  // goBack(): void {
  //   this.location.back();
  // }
}
