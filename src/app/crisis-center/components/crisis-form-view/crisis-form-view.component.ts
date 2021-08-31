import { Router } from '@angular/router';
import { CrisisCenterService } from './../../services/crisis-center.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Crisis } from '@ng-heroes/shared/models/crisis.model';
import { Hero } from '@ng-heroes/shared/models/hero';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'hrs-crisis-form-view',
  templateUrl: './crisis-form-view.component.html',
  styleUrls: ['./crisis-form-view.component.scss'],
})
export class CrisisFormViewComponent implements OnInit {
  @Input() heroes!: Hero[];
  @Input() form!: FormGroup;
  @Output() submitEvent: EventEmitter<Crisis> = new EventEmitter();
  crises!: Crisis[];

  hasUnitNumber = false;
  constructor(
    private crisisService: CrisisCenterService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.crisisService.getAll().subscribe((crises) => (this.crises = crises));
  }

  onSubmit(): void {
    this.submitEvent.emit(this.form.value);
    this.router.navigate(['/crisis-center']);
  }
}
