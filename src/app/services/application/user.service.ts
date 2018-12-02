import { Injectable } from '@angular/core';

import { NotificationService } from './notification.service';

import { AuthEmitter } from '../emitters/auth.emitter';

import { User } from '../../_models/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private notificationService: NotificationService,
    private authEmitter: AuthEmitter) { }

  /**
   * Clears users access token and emits event
   */
  logout() {
    localStorage.removeItem('access_token');

    localStorage.removeItem('user');

    this.authEmitter.announceLogout();

    this.notificationService.successToast('You have successfully logged out');
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
