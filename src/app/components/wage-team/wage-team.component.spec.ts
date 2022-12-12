import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageTeamComponent } from './wage-team.component';

describe('WageTeamComponent', () => {
  let component: WageTeamComponent;
  let fixture: ComponentFixture<WageTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WageTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WageTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
