import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {LoadUsers} from '../store/users.actions';
import * as fromUsers from '../../reducers';
import {State} from '../store/user.reducers';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;
  showSpinner = true;
  constructor(private router: Router,
              private store: Store<State>) {
    this.users$ = this.store.select(fromUsers.getUserEntities);
    console.log(this.users$);
  }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
  }

  onNewUser() {
    this.router.navigate(['users/new']);
  }
  onEditUser(user: User) {
    if (user) {
      this.router.navigate(['users/edit', user.id]);
    }
  }
}
