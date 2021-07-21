// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { map, switchMap } from 'rxjs/operators';
// import { User } from '../shared/user.model';
// import { UserService } from '../shared/user.service';

// @Component({
//   selector: 'my-user-show',
//   templateUrl: './user-show.component.html',
//   styleUrls: ['./user-show.component.scss'],
// })
// export class UserShowComponent implements OnInit, OnDestroy {
//   user!: User;

//   subscription!: Subscription;

//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private userService: UserService
//   ) {}

//   ngOnInit(): void {
//     // this.activatedRoute.paramMap
//     //   .pipe(map((paramMap: ParamMap) => paramMap.get('id') as string))
//     //   .subscribe((id: string) => {
//     //     this.userService.fetchById(id).subscribe((user) => {
//     //       this.user = user;
//     //     });
//     //   });
//     this.subscription = this.activatedRoute.paramMap
//       .pipe(
//         map((paramMap: ParamMap) => paramMap.get('id') as string),
//         switchMap((id: string) => this.userService.fetchById(id))
//       )
//       .subscribe((user) => {
//         this.user = user;
//       });
//   }

//   ngOnDestroy(): void {
//     this.subscription.unsubscribe();
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'my-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.scss'],
})
export class UserShowComponent implements OnInit {
  user$!: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.activatedRoute.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id') as string),
        switchMap((id: string) => this.userService.fetchById(id))
      );
  }
}
