import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionListingComponent } from './champion-listing.component';

describe('ChampionListingComponent', () => {
  let component: ChampionListingComponent;
  let fixture: ComponentFixture<ChampionListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
