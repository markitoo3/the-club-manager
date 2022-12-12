import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WageInputComponent } from './wage-input.component';

describe('WageInputComponent', () => {
  let component: WageInputComponent;
  let fixture: ComponentFixture<WageInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WageInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
