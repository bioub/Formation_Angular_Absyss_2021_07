import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'my-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {

  now = new Date();
  @Input() delay = 1000;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    // this.interval = setInterval(() => {
    //   this.now = new Date();
    // }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.delay.previousValue) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }


}
