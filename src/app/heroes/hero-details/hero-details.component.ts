import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../shared/models/hero';
import { HeroesService } from '../services/heroes.service';
import { Location } from '@angular/common';

@Component({
  selector: 'hrs-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?: Hero;
  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroesService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroById();
  }
  getHeroById(): void {
    this.heroService
      .getHero(+this.route.snapshot.paramMap.get('id')!)
      .subscribe((hero) => {
        this.hero = hero;
        this.isLoading = !this.isLoading;
      });
  }

  goBack(): void {
    this.location.back();
  }

  save() {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
