import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Hero } from '@ng-heroes/shared/models/hero';

@Component({
  selector: 'hrs-heroes-view',
  templateUrl: './heroes-view.component.html',
  styleUrls: ['./heroes-view.component.scss'],
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
export class HeroesViewComponent implements OnInit {
  @Input() heroes!: Hero[];
  @Input() selectedHero!: Hero;
  @Input() isLoading!: boolean;
  @Input() heroRating!: number;
  @Input() heroRatingArr!: Array<number>;
  @Output() selectHeroEvent = new EventEmitter<Hero>();
  @Output() deleteHeroEvent = new EventEmitter<Hero>();
  @Output() openDialogEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
