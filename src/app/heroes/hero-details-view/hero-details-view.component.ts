import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '@ng-heroes/shared/models/hero';

@Component({
  selector: 'hrs-hero-details-view',
  templateUrl: './hero-details-view.component.html',
  styleUrls: ['./hero-details-view.component.scss'],
})
export class HeroDetailsViewComponent implements OnInit {
  @Input() hero!: Hero | null;
  @Input() isLoading!: boolean | null;
  @Output() save = new EventEmitter();
  @Output() navigateBack = new EventEmitter();
  rating!: number;
  @Input() heroRating!: number;
  @Input() editMode!: boolean;
  get id() {
    return this.hero?.id;
  }

  get name() {
    return this.hero?.name;
  }

  constructor() {}

  ngOnInit(): void {}

  setRating(rating: number) {
    this.rating = rating;
  }
  onSave($event: string) {
    // Only god can judge me :)
    const newHeroName = $event;
    const heroId = this.hero?.id;

    this.save.emit({
      id: heroId,
      name: newHeroName,
      rating: this.rating,
    } as Hero);
  }
}
