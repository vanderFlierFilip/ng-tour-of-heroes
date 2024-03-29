import * as fromStore from '../store/reducers/heroes.reducer';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from '../../shared/models/hero';
import { MessagesService } from '../../messages/messages.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateHeroDialogComponent } from '../components/create-hero-dialog/create-hero-dialog.component';

import { Store, select } from '@ngrx/store';
import {
  loadHeroes,
  addHero,
  removeHero,
} from '../store/actions/heroes.actions';
import * as fromSelector from '../store/heroes.selectors';
@Component({
  selector: 'hrs-heroes',
  template: `
    <hrs-heroes-view
      [heroes]="(heroes$ | async)!"
      [isLoading]="(isLoading$ | async)!"
      [selectedHero]="selectedHero!"
      [heroRating]="heroRating"
      [heroRatingArr]="heroRatingArr"
      (selectHeroEvent)="onSelectHero($event)"
      (deleteHeroEvent)="delete($event)"
      (openDialogEvent)="openDialog()"
    >
    </hrs-heroes-view>
  `,
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes$ = this.store.select(fromSelector.heroes);

  isSelected = false;
  selectedHero?: Hero;
  isLoading$ = this.store.select(fromSelector.loading);
  heroRating!: number;
  heroRatingArr!: Array<number>;
  constructor(
    private dialog: MatDialog,
    private messagesService: MessagesService,
    private store: Store<fromStore.HeroesState>
  ) {}

  ngOnInit(): void {
    this.getHeroes();
    this.heroRatingArr = Array(this.heroRating);
  }
  getHeroes(): void {
    this.store.dispatch(loadHeroes());
  }

  addHero(name: string): void {
    if (!name) return;

    this.store.dispatch(addHero({ payload: { name } as Hero }));
  }

  delete(hero: Hero) {
    this.store.dispatch(removeHero({ payload: hero }));
  }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
    this.messagesService.add(
      `HeroesComponent: selected hero with id ${hero.id}`
    );
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(CreateHeroDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((name: string) => {
      this.addHero(name);
    });
  }
}
