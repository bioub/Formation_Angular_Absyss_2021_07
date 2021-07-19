import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExTristatebuttonComponent } from './ex-tristatebutton.component';

describe('ExTristatebuttonComponent', () => {
  let component: ExTristatebuttonComponent;
  let fixture: ComponentFixture<ExTristatebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExTristatebuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExTristatebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
