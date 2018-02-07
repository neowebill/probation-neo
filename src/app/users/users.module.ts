import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import {UsersRouterModule} from './users-router/users-router.module';
import {StoreModule} from '@ngrx/store';
import {userReducer} from './store/user.reducers';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/user.effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRouterModule,
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [UserEditComponent, UsersListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }
