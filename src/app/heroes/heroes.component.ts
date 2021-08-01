import { HeroDetailsContentDirective } from './../hero-details/hero-details-content.directive';
import { HEROES } from './../mock-heroes';
import { Component, ContentChild, OnInit } from '@angular/core';
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
  selectedHero?: Hero;
  heroes: Hero[] = [];
  isSelected = false;
  @ContentChild(HeroDetailsContentDirective)
  content!: HeroDetailsContentDirective;
  constructor(
    private heroesService: HeroesService,
    private messagesService: MessagesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelectHero(hero: Hero) {
    this.selectedHero = hero;
    this.messagesService.add(
      `HeroesComponent: selected hero with id ${hero.id}`
    );
  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    this.dialog.open(CreateHeroDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(CreateHeroDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (!name) return;
      this.heroesService.addHero({ name } as Hero).subscribe((hero) => {
        this.heroes.push(hero);
      });
    });
  }
}
