import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedlistComponent } from './allocatedlist.component';

describe('AllocatedlistComponent', () => {
  let component: AllocatedlistComponent;
  let fixture: ComponentFixture<AllocatedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocatedlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
