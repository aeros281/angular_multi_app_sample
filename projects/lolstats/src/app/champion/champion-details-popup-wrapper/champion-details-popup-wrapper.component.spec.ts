import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionDetailsPopupWrapperComponent } from './champion-details-popup-wrapper.component';

describe('ChampionDetailsPopupWrapperComponent', () => {
  let component: ChampionDetailsPopupWrapperComponent;
  let fixture: ComponentFixture<ChampionDetailsPopupWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionDetailsPopupWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionDetailsPopupWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
