import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';
import { MessagesService } from '../messages.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateHeroDialogComponent } from '../create-hero-dialog/create-hero-dialog.component';
@Component({
  selector: 'hrs-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes!: Hero[];
  isSelected = false;
  selectedHero?: Hero;
  isLoading = true;

  constructor(
    private heroesService: HeroesService,
    private dialog: MatDialog,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.isLoading = !this.isLoading;
      this.heroes = heroes;
    });
  }

  addHero(name: string): void {
    if (!name) return;
    this.heroesService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.unshift(hero);
    });
  }

  delete(hero: Hero) {
    this.heroesService.deleteHero(hero.id);
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

    // this.dialog.open(CreateHeroDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(CreateHeroDialogComponent, dialogConfig);

    //
    dialogRef.afterClosed().subscribe((name: string) => {
      this.addHero(name);
    });
  }
}
