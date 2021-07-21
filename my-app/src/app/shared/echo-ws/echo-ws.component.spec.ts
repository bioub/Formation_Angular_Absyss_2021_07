import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoWsComponent } from './echo-ws.component';

describe('EchoWsComponent', () => {
  let component: EchoWsComponent;
  let fixture: ComponentFixture<EchoWsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchoWsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
