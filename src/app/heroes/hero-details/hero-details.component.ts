import { Observable } from 'rxjs';
import * as fromStore from '../store/reducers/heroes.reducer';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../shared/models/hero';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { getHeroById, updateHero } from '../store/actions/heroes.actions';
import * as fromSelector from '../store/heroes.selectors';

@Component({
  selector: 'hrs-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
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
    this.getHeroById();
  }
  getHeroById(): void {
    const heroId = +this.route.snapshot.paramMap.get('id')!;
    this.store.dispatch(getHeroById({ heroId }));
    this.hero$ = this.store.select(fromSelector.hero) as Observable<Hero>;
  }

  goBack(): void {
    this.location.back();
  }

  save(hero: Hero) {
    this.store.dispatch(updateHero({ payload: hero }));
    this.goBack();
  }
}
