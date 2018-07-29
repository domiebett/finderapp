import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

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
    return this.http.post('auth/login', {email: email, password: password})
      .pipe(
        map((response: HttpResponse<any>) => {
          localStorage.setItem('authToken', response['token']);
          localStorage.setItem('user', JSON.stringify(response['user']));
          return response;
        }),
        catchError((error) => {
          console.log(error);
          return throwError(error);
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
    return this.http.post('auth/signup', {username: name, email: email, password: password})
      .pipe(
        map((response: HttpResponse<any>) => response),
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      );
  }
}
