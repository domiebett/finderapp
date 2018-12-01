import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthComponent } from '../auth.component';

import {AuthService} from '../../../_services/http/auth.service';
import {NotificationService} from '../../../_services/application/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss', './login.component.scss']
})
export class LoginComponent extends AuthComponent {

  constructor(
    authService: AuthService,
    notificationService: NotificationService,
    router: Router
  ) {
    super(authService, notificationService, router);
  }

  onSubmit() {
    this.authService.login(
      this.model['email'],
      this.model['password']
    ).subscribe((response) => {
      this.router.navigate(['/items']);
      this.notificationService.successToast('Logged in successfully');
    });
  }
}
