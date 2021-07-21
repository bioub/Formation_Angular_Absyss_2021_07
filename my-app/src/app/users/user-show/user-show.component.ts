import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'my-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss'],
})
export class UserShowComponent implements OnInit {
  user: User = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.paramMap
    //   .pipe(map((paramMap: ParamMap) => paramMap.get('id') as string))
    //   .subscribe((id: string) => {
    //     this.userService.fetchById(id).subscribe((user) => {
    //       this.user = user;
    //     });
    //   });
    this.activatedRoute.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id') as string),
        switchMap((id: string) => this.userService.fetchById(id))
      )
      .subscribe((user) => {
        this.user = user;
      });
  }
}
