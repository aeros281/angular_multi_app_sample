import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionHomeComponent } from './champion-home.component';

describe('ChampionHomeComponent', () => {
  let component: ChampionHomeComponent;
  let fixture: ComponentFixture<ChampionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
