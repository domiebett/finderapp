import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { AuthEmitter } from '../emitters/auth.emitter';

import { HttpLoginResponse } from '../../_models/interfaces/auth';
import { StorageUtils } from '../../_utils/storage.utils';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private authEmitter: AuthEmitter) { }

  /**
   * Service method to login a user
   *
   * @param email - user's email
   * @param password - user's password
   */
  login(email: string, password: string) {
    return this.http.post<HttpLoginResponse>('auth/login', {email: email, password: password})
      .pipe(
        map((result) => {
          StorageUtils.storeLoginDetails(result);
          this.authEmitter.announceLogin(result.user);
        })
      );
  }

  /**
   * Service method to sign up a user.
   *
   * @param name - user's name
   * @param email - user's email
   * @param password - user's password
   */
  signup(name: string, email: string, password: string) {
    return this.http.post('auth/signup', {username: name, email: email, password: password});
  }
}
