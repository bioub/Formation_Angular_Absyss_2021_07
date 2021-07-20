import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-clock-with-controls',
  templateUrl: './clock-with-controls.component.html',
  styleUrls: ['./clock-with-controls.component.scss']
})
export class ClockWithControlsComponent implements OnInit {

  showClock = true;
  delay = 1000;

  constructor() { }

  ngOnInit(): void {
  }

}
