import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerWaitingComponent } from './trainer-waiting.component';

describe('TrainerWaitingComponent', () => {
  let component: TrainerWaitingComponent;
  let fixture: ComponentFixture<TrainerWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerWaitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
