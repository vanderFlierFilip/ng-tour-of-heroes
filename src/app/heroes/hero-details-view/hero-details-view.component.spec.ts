import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsViewComponent } from './hero-details-view.component';

describe('HeroDetailsViewComponent', () => {
  let component: HeroDetailsViewComponent;
  let fixture: ComponentFixture<HeroDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
