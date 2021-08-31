import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesMenuComponent } from './heroes-menu.component';

describe('HeroesMenuComponent', () => {
  let component: HeroesMenuComponent;
  let fixture: ComponentFixture<HeroesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
