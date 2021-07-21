import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'my-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phone: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    // form d'update :
    // this.userForm.setValue({})
    this.userForm.valueChanges.subscribe((user) => {
      console.log(user);
    });
  }

  addUser() {
    if (this.userForm.invalid) {
      return;
    }

    this.userService.create(this.userForm.value).subscribe(() => {
      this.router.navigate(['users'])
    });
  }
}
