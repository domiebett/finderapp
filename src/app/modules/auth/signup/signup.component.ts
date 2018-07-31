import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../_services/http/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.scss', './signup.component.scss']
})
export class SignupComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signup(
      this.model['username'],
      this.model['email'],
      this.model['password']
    ).subscribe((response) => console.log('Signed up successfully'));
  }
}
