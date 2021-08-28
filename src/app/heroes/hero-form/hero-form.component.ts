import { Hero } from '@ng-heroes/shared/models/hero';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'hrs-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  form!: FormGroup;
  @Output() onSaveChanges = new EventEmitter<Hero>();

  @Input() hero!: Hero;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [this.hero.id],
      name: [
        this.hero.name,
        {
          validators: Validators.required,
        },
      ],
      rating: 1,
    });

    if (this.hero !== undefined) {
      this.form.patchValue(this.hero);
    }
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form?.value);
    console.log(this.form?.value);
  }

  onRatingEvent(rating: number) {
    console.log(rating);
    this.form.get('rating')?.setValue(rating)!;
  }
}
