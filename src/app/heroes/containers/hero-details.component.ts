import { Observable, PartialObserver, Subject } from 'rxjs';
import * as fromStore from '../store/reducers/heroes.reducer';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../../shared/models/hero';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromActions from '@ng-heroes/heroes/store/actions/heroes.actions';
import * as fromSelector from '../store/heroes.selectors';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { skip } from 'rxjs/operators';
@Component({
  selector: 'hrs-hero-details',
  template: `
    <div class="container">
      <hrs-hero-details-view
        [hero]="(hero$ | async)!"
        (save)="save($event)"
        [isLoading]="(isLoading$ | async)!"
        (navigateBack)="goBack()"
        [heroRating]="(heroRating$ | async)!"
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
  routeParamId!: number;
  isLoading$ = this.store.select(fromSelector.loading)!;
  heroRating$!: Observable<number>;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private store: Store<fromStore.HeroesState>
  ) {}

  ngOnInit(): void {
    // Slice the heroes from the store in case of refresh or a crash
    this.store.dispatch(fromActions.loadHeroes());

    this.getHeroById();

    this.heroRating$ = this.store
      .select(fromSelector.selectHeroRating)
      .pipe(skip(1));
  }

  private getHeroById(): void {
    this.route.params.subscribe((route) => {
      this.routeParamId = +route['id'];

      this.store.dispatch(
        fromActions.getHeroById({ heroId: this.routeParamId })
      );

      this.hero$ = this.store.select(fromSelector.hero) as Observable<Hero>;
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    this.store.dispatch(fromActions.updateHero({ payload: hero }));
    this.goBack();
  }
}
