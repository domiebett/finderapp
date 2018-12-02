import {Injectable, ErrorHandler, Injector} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import {NotificationService} from '../application/notification.service';

import { Alert } from '../../_models/classes/alert';
import {AlertType} from '../../_models/enums/alert';

@Injectable()
export class ErrorsHandler extends ErrorHandler {

  constructor(private injector: Injector) {
    super();
  }

  handleError(error: HttpErrorResponse) {

    const notificationService = this.injector.get(NotificationService);

    if (error instanceof HttpErrorResponse) {

      if (error.status === 401 || 400) {
        notificationService.toast(new Alert(error.error.message, AlertType.Warning));
      }

      if (error.status === 500) {
        const message = 'Error occured with the server. We are working on fixing this.';
        notificationService.toast(new Alert(message, AlertType.Error));
      }

      if (error.status === 422) {
        const message = 'There was an error with your input fields. Recheck them.';
        notificationService.toast(new Alert(message, AlertType.Error));
      }
    } else {
      console.log('Client error', error);
    }
  }
}
