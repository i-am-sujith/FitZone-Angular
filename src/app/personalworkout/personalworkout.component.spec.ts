import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalworkoutComponent } from './personalworkout.component';

describe('PersonalworkoutComponent', () => {
  let component: PersonalworkoutComponent;
  let fixture: ComponentFixture<PersonalworkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalworkoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
