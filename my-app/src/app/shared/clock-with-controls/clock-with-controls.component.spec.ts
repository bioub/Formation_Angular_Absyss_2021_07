import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockWithControlsComponent } from './clock-with-controls.component';

describe('ClockWithControlsComponent', () => {
  let component: ClockWithControlsComponent;
  let fixture: ComponentFixture<ClockWithControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockWithControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockWithControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
