import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'users', loadChildren: '../users/users.module#UsersModule'},
  { path: 'about', component: AboutComponent}

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule. forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
