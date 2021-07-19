import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vt-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user = {
    firstName: 'Romain',
    lastName: 'Bohdanowicz',
  }

  constructor() { }

  ngOnInit(): void {
  }

  create(event: Event) {
    // event.preventDefault();
    console.log(this.user);
  }

  checkValidity(key: 'firstName'|'lastName') {
    return {valid: this.user[key] !== '', invalid: this.user[key] === ''}
  }

}
