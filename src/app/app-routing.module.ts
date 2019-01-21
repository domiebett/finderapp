import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { ItemsComponent } from './modules/items/items/items.component';

const routes: Routes = [
  // redirects
  { path: '', redirectTo: '/items/found', pathMatch: 'full' },
  { path: 'items', redirectTo: '/items/found', pathMatch: 'full' },

  // auth module
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // items module
  { path: 'items/:type', component: ItemsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
