import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEnrollmentComponent } from './trainer-enrollment.component';

describe('TrainerEnrollmentComponent', () => {
  let component: TrainerEnrollmentComponent;
  let fixture: ComponentFixture<TrainerEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerEnrollmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
