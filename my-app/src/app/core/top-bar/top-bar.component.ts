import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
