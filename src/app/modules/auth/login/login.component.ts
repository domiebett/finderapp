import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss', './login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(
      this.model['email'],
      this.model['password']
    ).toPromise().then(response => {
      console.log(response);
    });
  }

}
