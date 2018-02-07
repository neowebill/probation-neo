import {Actions, Effect} from '@ngrx/effects';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as usersActions from './users.actions';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/startWith';


@Injectable()
export class UserEffects {
  @Effect() fetchUsers$: Observable<Action> = this.actions$
    .ofType(usersActions.LOAD_USERS)
    .startWith(new usersActions.LoadUsers())
    .switchMap(() => this.userService.getUsers())
    .map( res => new usersActions.LoadUsersSuccess(res))
    .catch((err) => of(new usersActions.LoadUsersFail(err)));

  @Effect() saveUser$: Observable<any> = this.actions$
    .ofType(usersActions.ADD_USER)
    .switchMap((action: usersActions.AddUser) => this.userService.addUser(action.payload))
    .map(user => new usersActions.AddUserSuccess(user))
    .catch(err => of(new usersActions.AddUserFail(err)));

  constructor(private actions$: Actions, private userService: UserService) {}
}
