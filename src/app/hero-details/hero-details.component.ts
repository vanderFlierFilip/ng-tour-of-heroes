import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { Location } from '@angular/common';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'hrs-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?: Hero;
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
