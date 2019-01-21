import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, SharedModule, RouterModule],
  exports: [LoginComponent, SignupComponent],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule { }
