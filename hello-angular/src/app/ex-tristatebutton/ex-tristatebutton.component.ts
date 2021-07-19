import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vt-ex-tristatebutton',
  templateUrl: './ex-tristatebutton.component.html',
  styleUrls: ['./ex-tristatebutton.component.scss']
})
export class ExTristatebuttonComponent implements OnInit {

  @Input() selected = '';
  @Input() values = ['Oui', 'Non', 'Peut-être'];
  @Output() selectedChange = new EventEmitter<string>();

  constructor() {
    console.log('constructor', this.values);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.values);
    if (!this.values.length) {
      throw new Error('Values must be a filled array');
    }

    if (!this.selected) {
      this.selected = this.values[0];
    }
  }

  handleClick() {
    this.selected = this.values[(this.values.indexOf(this.selected) + 1) % this.values.length];
    this.selectedChange.emit(this.selected);
  }

}
