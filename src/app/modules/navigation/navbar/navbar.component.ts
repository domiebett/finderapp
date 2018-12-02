import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../_services/application/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  displayNavigationLinks = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /**
   * Toggles mobile mode navigation bar dropdown
   */
  toggleNavLinksDropdown() {
    this.displayNavigationLinks = !this.displayNavigationLinks;
  }

  /**
   * Logs out user by calling service method.
   */
  logout() {
    this.authService.logout();
  }
}
