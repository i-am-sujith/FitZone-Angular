import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionplanComponent } from './nutritionplan.component';

describe('NutritionplanComponent', () => {
  let component: NutritionplanComponent;
  let fixture: ComponentFixture<NutritionplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
