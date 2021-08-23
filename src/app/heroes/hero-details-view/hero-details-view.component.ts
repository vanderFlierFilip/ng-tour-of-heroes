import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor() {}

  ngOnInit(): void {}

  onSave($event: string) {
    // Only god can judge me :)
    const newHeroName = $event;
    const heroId = this.hero?.id;

    this.save.emit({ id: heroId, name: newHeroName } as Hero);
  }
}
