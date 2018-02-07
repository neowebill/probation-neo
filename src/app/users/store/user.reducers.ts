import {User} from '../user.model';
import * as UsersActions from './users.actions';

export interface State {
  error?: Error;
  users: User[];
  selectedUser: User;
  loading: boolean;
}
const initialState: State = {
  error: undefined,
  users: [],
  selectedUser: undefined,
  loading: false,
};

export function userReducer(state = initialState, action: UsersActions.UsersActions): State {
  switch (action.type) {
    case (UsersActions.LOAD_USERS):
      return {
        ...state,
        loading: true,
      };

    case (UsersActions.LOAD_USERS_SUCCESS):
      return {
        ...state,
        users: action.payload,
        loading: false
      };

    case (UsersActions.LOAD_USERS_FAIL):
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case (UsersActions.ADD_USER):
      return {
        ...state,
        users: [...state.users, action.payload]
      };
      case (UsersActions.ADD_USER_SUCCESS):
      return {
        ...state,
        users: [...state.users, action.payload]
      };

    case (UsersActions.UPDATE_USER):
      const user = state.users[action.payload.index];
      const updatedUser = {
        ...user,
        ...action.payload.updatedUser
      };
      const users = [...state.users];
      users[action.payload.index] = updatedUser;
      return {
        ...state,
        users: users
      };

    default:
      return state;
  }
}
export const getUserEntities = (state: State) => state.users;
export const getLoading = (state: State) => state.loading;

