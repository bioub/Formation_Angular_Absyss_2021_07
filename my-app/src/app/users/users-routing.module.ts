import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { UserAddComponent } from './user-add/user-add.component';
import { UserShowComponent } from './user-show/user-show.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
  path: '',
  component: UsersComponent,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  children: [{
    path: 'add',
    component: UserAddComponent,
  }, {
    data: {
      title: 'User Show'
    },
    path: ':id',
    component: UserShowComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
