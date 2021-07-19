import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vt-ex-tristatebutton',
  templateUrl: './ex-tristatebutton.component.html',
  styleUrls: ['./ex-tristatebutton.component.scss']
})
export class ExTristatebuttonComponent implements OnInit {

  values = ['Oui', 'Non', 'Peut-être'];

  constructor() { }

  ngOnInit(): void {
  }

}
