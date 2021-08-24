import { Observable } from 'rxjs';
import * as fromStore from '../store/reducers/heroes.reducer';
import {
  AfterContentChecked,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../shared/models/hero';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import * as fromActions from '@ng-heroes/heroes/store/actions/heroes.actions';
import * as fromSelector from '../store/heroes.selectors';

@Component({
  selector: 'hrs-hero-details',
  template: `
    <div class="container">
      <hrs-hero-details-view
        [hero]="hero$ | async"
        (save)="save($event)"
        [isLoading]="isLoading$ | async"
        (navigateBack)="goBack()"
      >
      </hrs-hero-details-view>
    </div>
  `,
  styles: [
    `
      .container {
        display: grid;
        height: 25vh;
        place-items: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailsComponent implements OnInit {
  hero$!: Observable<Hero>;

  isLoading$ = this.store.select(fromSelector.loading);
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<fromStore.HeroesState>
  ) {}

  ngOnInit(): void {
    // Slice the heroes from the store in case of refresh or a crash
    this.store.dispatch(fromActions.loadHeroes());

    this.getHeroById();
  }

  private getHeroById(): void {
    this.route.params.subscribe((route) => {
      const routeParamId = +route['id'];
      this.store.dispatch(fromActions.getHeroById({ heroId: routeParamId }));
    });

    this.hero$ = this.store.select(fromSelector.hero) as Observable<Hero>;
  }

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    this.store.dispatch(fromActions.updateHero({ payload: hero }));
    this.goBack();
  }
}
