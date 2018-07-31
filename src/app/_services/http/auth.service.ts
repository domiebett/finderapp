import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
   * Service method to login a user
   *
   * @param email - user's email
   * @param password - user's password
   */
  login(email: string, password: string) {
    return this.http.post('auth/login', {email: email, password: password});
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
