import * as fromStore from '../../store/reducers/heroes.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from '../../../shared/models/hero';
import * as fromSelector from '../../store/heroes.selectors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as fromActions from '@ng-heroes/heroes/store/actions/heroes.actions';
@Component({
  selector: 'hrs-heroes-menu',
  templateUrl: './heroes-menu.component.html',
  styleUrls: ['./heroes-menu.component.scss'],
})
export class HeroesMenuComponent implements OnInit {
  topHeroes$?: Observable<Hero[]>;
  isLoading$?: Observable<boolean>;

  constructor(private store: Store<fromStore.HeroesState>) {}

  ngOnInit(): void {
    this.getTopHeroes();

    this.isLoading$ = this.store.select(fromSelector.loading);
  }

  getTopHeroes(): void {
    this.store.dispatch(fromActions.loadHeroes());

    this.topHeroes$ = this.store
      .select(fromSelector.heroesSelector)
      .pipe(map((heroesState) => heroesState.heroList.slice(1, 5)));
  }
}
