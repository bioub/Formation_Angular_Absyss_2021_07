import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'vt-ex-helloworld',
  templateUrl: './ex-helloworld.component.html',
  styleUrls: ['./ex-helloworld.component.scss']
})
export class ExHelloworldComponent implements OnInit {

  name = new FormControl('Romain');


  constructor() { }

  ngOnInit(): void {
    this.name.valueChanges.subscribe((val) => {
      console.log(val);
    });
  }

}
