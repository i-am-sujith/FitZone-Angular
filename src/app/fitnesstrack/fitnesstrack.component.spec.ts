import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnesstrackComponent } from './fitnesstrack.component';

describe('FitnesstrackComponent', () => {
  let component: FitnesstrackComponent;
  let fixture: ComponentFixture<FitnesstrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnesstrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnesstrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
