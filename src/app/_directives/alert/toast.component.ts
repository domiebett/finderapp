import {Component, Input, NgZone} from '@angular/core';

import {NotificationService} from '../../_services/application/notification.service';

import { Alert } from '../../_models/classes/alert';
import {AlertType} from '../../_models/enums/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  @Input() limit = 10;
  toasts: Alert[] = [];

  constructor(private zone: NgZone, private notificationService: NotificationService) {
    this.notificationService.toastOpenCalled$.subscribe((alert: Alert) => {

      this.zone.run(() => {
        this.setToasts(alert);
      });

    });
  }

  /**
   * Adds toast messages
   *
   * @param alert
   */
  setToasts(alert: Alert) {
    if (!alert.message) {
      this.clearAlerts();
    } else {
      if (this.toasts.length > this.limit) {
        this.toasts.shift();
      }
      this.toasts.push(alert);
    }
  }

  /**
   * Removes all toasts
   */
  clearAlerts() {
    this.toasts = [];
  }

  /**
   * Returns appropriate css class for toasts
   *
   * @param {Alert} alert
   * @returns {string} - css class name for alert.
   */
  cssClass(alert: Alert) {
    switch (alert.type) {
      case AlertType.Success:
        return 'toast-success';
      case AlertType.Warning:
        return 'toast-warning';
      case AlertType.Error:
        return 'toast-error';
      case AlertType.Info:
        return 'toast-info';
    }
  }
}
