import { AppState } from './../state/app.state';
import { Observable } from 'rxjs';
import { selectHeroes } from './../state/heroes.selectors';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/models/hero';
import { HeroesService } from './services/heroes.service';
import { MessagesService } from '../messages.service';
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
import { retrieveHeroesList } from '../state/heroes.actions';

@Component({
  selector: 'hrs-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  animations: [
    trigger('fade', [
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
})
export class HeroesComponent implements OnInit {
  heroes$ = this.store.pipe(select(selectHeroes));
  heroes!: Hero[];
  isSelected = false;
  selectedHero?: Hero;
  isLoading = true;

  constructor(
    private heroesService: HeroesService,
    private dialog: MatDialog,
    private messagesService: MessagesService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    // this.heroesService.getHeroes().subscribe((Hero) => {
    //   this.store.dispatch(retrieveHeroesList({ Hero }));
    //   this.isLoading = !this.isLoading;
    // });
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.isLoading = !this.isLoading;
    });
  }

  addHero(name: string): void {
    if (!name) return;
    this.heroesService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.unshift(hero);
    });
  }

  delete(hero: Hero) {
    this.heroes = this.heroes.filter((h) => h.id !== hero.id);
    this.heroesService.deleteHero(hero.id).subscribe();
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
