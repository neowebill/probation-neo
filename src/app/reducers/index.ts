import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as users from '../users/store/user.reducers';

export const reducers: ActionReducerMap<any> = {
  users: users.userReducer
};

export const getUsersState = createFeatureSelector<users.State>('users');
export const getUserEntities = createSelector(getUsersState, users.getUserEntities);
