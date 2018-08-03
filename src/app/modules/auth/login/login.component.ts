import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../../_services/http/auth.service';
import {NotificationService} from '../../../_services/application/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit() {
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
