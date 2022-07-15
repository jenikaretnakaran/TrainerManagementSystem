import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerApprovalComponent } from './trainer-approval.component';

describe('TrainerApprovalComponent', () => {
  let component: TrainerApprovalComponent;
  let fixture: ComponentFixture<TrainerApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
