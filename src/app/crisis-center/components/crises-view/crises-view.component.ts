import { Component, Input, OnInit } from '@angular/core';
import { Crisis } from '@ng-heroes/shared/models/crisis.model';

@Component({
  selector: 'hrs-crises-view',
  templateUrl: './crises-view.component.html',
  styleUrls: ['./crises-view.component.scss'],
})
export class CrisesViewComponent implements OnInit {
  @Input() crises!: Crisis[];

  constructor() {}

  ngOnInit(): void {}
}
