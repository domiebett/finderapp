import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthComponent } from '../auth.component';

import { AuthService } from '../../../_services/http/auth.service';
import {NotificationService} from '../../../_services/application/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.scss', './signup.component.scss']
})
export class SignupComponent extends AuthComponent {

  constructor(
    authService: AuthService,
    notificationService: NotificationService,
    router: Router
  ) {
    super(authService, notificationService, router);
  }

  onSubmit() {
    this.authService.signup(
      this.model['username'],
      this.model['email'],
      this.model['password']
    ).subscribe((response) => console.log('Signed up successfully'));
  }
}
