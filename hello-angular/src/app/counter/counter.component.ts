import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vt-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(step: number) {
    this.count += step;
  }

}
