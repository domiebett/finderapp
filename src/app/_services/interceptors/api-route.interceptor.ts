import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class ApiRouteInterceptor implements HttpInterceptor {

  apiUrl: string;

  constructor() {
    this.apiUrl = environment.apiUrl;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiRequest = request.clone({ url: `${this.apiUrl}/${request.url}` });
    return next.handle(apiRequest);
  }
}
