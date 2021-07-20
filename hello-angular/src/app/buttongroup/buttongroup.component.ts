import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vt-buttongroup',
  templateUrl: './buttongroup.component.html',
  styleUrls: ['./buttongroup.component.scss']
})
export class ButtongroupComponent implements OnInit {

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

  handleClick(value: string) {
    this.selected = value;
    this.selectedChange.emit(this.selected);
  }

}
