import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'vt-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  name = 'Romain';

  constructor() { }

  ngOnInit(): void {

  }

}
