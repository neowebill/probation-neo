import { Action } from '@ngrx/store';
import { User } from '../user.model';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const LOAD_USERS_FAIL = 'LOAD_USERS_FAIL';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAIL = 'ADD_USER_FAIL';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;

  constructor(public payload: User[]) {}
}

export class LoadUsersFail implements Action {
  readonly type = LOAD_USERS_FAIL;
  constructor(public payload?: Error) {}
}
export class AddUser implements Action {
  readonly type = ADD_USER;

  constructor(public payload: User) {}
}

export class AddUserSuccess implements Action {
  readonly type = ADD_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class AddUserFail implements Action {
  readonly type = ADD_USER_FAIL;
  constructor(public payload?: Error) {}
}

export class UpdateUser implements Action {
  readonly type = UPDATE_USER;

  constructor(public payload: {index: number, updatedUser: User}) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UPDATE_USER_SUCCESS;

  constructor(public payload: User) {}
}

export class UpdateUserFail implements Action {
  readonly type = UPDATE_USER_FAIL;
  constructor( public payload?: any) {}
}

export type UsersActions =
  LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | AddUser
  | AddUserSuccess
  | AddUserFail
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFail;
