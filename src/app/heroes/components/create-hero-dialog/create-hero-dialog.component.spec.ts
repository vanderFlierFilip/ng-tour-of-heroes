import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeroDialogComponent } from './create-hero-dialog.component';

describe('CreateHeroDialogComponent', () => {
  let component: CreateHeroDialogComponent;
  let fixture: ComponentFixture<CreateHeroDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHeroDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHeroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
