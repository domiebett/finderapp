import { Injectable } from '@angular/core';

import { User } from '../../_models/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * Clears users access token
   */
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
  }

  /**
   * Get current logged in user
   * 
   * @return { User }
   */
  getLoggedInUser(): User {
    let user = localStorage.getItem('user');
    return JSON.parse(user);
  }
}
