import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerTeamsComponent } from './soccer-teams.component';

describe('SoccerTeamsComponent', () => {
  let component: SoccerTeamsComponent;
  let fixture: ComponentFixture<SoccerTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
