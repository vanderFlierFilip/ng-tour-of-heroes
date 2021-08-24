import * as fromStore from './store/reducers/heroes.reducer';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hero } from '../shared/models/hero';
import { HeroesService } from './services/heroes.service';
import { MessagesService } from '../messages/messages.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateHeroDialogComponent } from './create-hero-dialog/create-hero-dialog.component';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Store, select, StoreModule } from '@ngrx/store';
import {
  loadHeroes,
  addHero,
  removeHero,
} from './store/actions/heroes.actions';
import * as fromSelector from './store/heroes.selectors';

@Component({
  selector: 'hrs-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  animations: [
    trigger('slideIn', [
      state(
        'void',
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
        })
      ),
      transition('* <=> void', [animate('0.3s')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  heroes$ = this.store.select(fromSelector.heroes);

  isSelected = false;
  selectedHero?: Hero;
  isLoading$ = this.store.select(fromSelector.loading);

  constructor(
    private dialog: MatDialog,
    private messagesService: MessagesService,
    private store: Store<fromStore.HeroesState>
  ) {}

  ngOnInit(): void {
    this.getHeroes();
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
