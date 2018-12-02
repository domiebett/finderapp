import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../services/application/user.service';

import { AuthEmitter } from 'src/app/services/emitters/auth.emitter';

import { User } from 'src/app/_models/interfaces/user';

import { Button, ButtonHeight } from '../../../_models/enums/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  displayNavigationLinks = false;
  loggedInUser: User;
  loginButtonHeight: ButtonHeight = ButtonHeight.Medium;
  loginButtonClass: Button = Button.Primary;

  constructor(
    private authService: UserService,
    private authEmitter: AuthEmitter,
    private userService: UserService,
    private router: Router){

      authEmitter.loginAnnounced$.subscribe((user) => {
        this.loggedInUser = user;
      });

      authEmitter.logoutAnnounced$.subscribe(() => {
        this.loggedInUser = null;
      });
  }

  ngOnInit() {
    let user = this.userService.getLoggedInUser();

    this.loggedInUser = user ? user : null;
  }

  /**
   * Toggles mobile mode navigation bar dropdown
   */
  toggleNavLinksDropdown() {
    this.displayNavigationLinks = !this.displayNavigationLinks;
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }

  /**
   * Logs out user by calling service method.
   */
  logout() {
    this.authService.logout();
  }
}
