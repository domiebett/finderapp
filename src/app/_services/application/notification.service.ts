import { Injectable } from '@angular/core';

import {NavigationStart, Router} from '@angular/router';

import {Alert} from '../../_models/alert';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private toastOpenSource = new Subject<Alert>();

  toastOpenCalled$ = this.toastOpenSource.asObservable();

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.clearToasts();
      }
    });
  }

  /**
   * Append single toast to those currently available.
   *
   * @param {Alert} alert
   */
  toast(alert: Alert) {
    this.toastOpenSource.next(alert);
  }

  successToast(message: string) {
    this.toastOpenSource.next(new Alert(message));
  }

  /**
   * Remove all toast notifications from application.
   */
  clearToasts() {
    this.toastOpenSource.next(new Alert());
  }
}
