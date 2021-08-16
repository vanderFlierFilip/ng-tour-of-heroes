import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHeroMobileComponent } from './search-hero-mobile.component';

describe('SearchHeroMobileComponent', () => {
  let component: SearchHeroMobileComponent;
  let fixture: ComponentFixture<SearchHeroMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHeroMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHeroMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
