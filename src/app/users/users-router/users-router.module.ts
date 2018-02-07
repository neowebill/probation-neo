import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserEditComponent} from '../user-edit/user-edit.component';
import {UsersListComponent} from '../users-list/users-list.component';

const usersRoutes: Routes = [
  {path: '', component: UsersListComponent },
  { path: 'new', component: UserEditComponent },
  { path: 'edit/:id', component: UserEditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class UsersRouterModule { }
