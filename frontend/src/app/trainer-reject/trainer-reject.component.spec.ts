import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerRejectComponent } from './trainer-reject.component';

describe('TrainerRejectComponent', () => {
  let component: TrainerRejectComponent;
  let fixture: ComponentFixture<TrainerRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
