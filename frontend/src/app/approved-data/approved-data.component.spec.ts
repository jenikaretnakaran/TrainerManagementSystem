import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedDataComponent } from './approved-data.component';

describe('ApprovedDataComponent', () => {
  let component: ApprovedDataComponent;
  let fixture: ComponentFixture<ApprovedDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
