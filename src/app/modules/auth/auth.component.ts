import { Router } from '@angular/router';
import { Component } from '@angular/core';

import {AuthService} from '../../_services/http/auth.service';
import {NotificationService} from '../../_services/application/notification.service';

import { Button, ButtonHeight } from '../../_models/enums/button';

@Component({
    selector: 'app-auth',
})
export class AuthComponent {
    model: any = {};
    actionButtonClass: Button = Button.Primary;
    disabledButtonClass: Button = Button.Disabled;
    actionButtonHeight: ButtonHeight = ButtonHeight.Tall;

    constructor(
        protected authService: AuthService,
        protected notificationService: NotificationService,
        protected router: Router
    ) { }
}
