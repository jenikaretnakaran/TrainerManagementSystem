import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerProfileupdateComponent } from './trainer-profileupdate.component';

describe('TrainerProfileupdateComponent', () => {
  let component: TrainerProfileupdateComponent;
  let fixture: ComponentFixture<TrainerProfileupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerProfileupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerProfileupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
