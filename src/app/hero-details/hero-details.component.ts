import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'hrs-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero?: Hero;
  constructor() {}

  ngOnInit(): void {}
}
