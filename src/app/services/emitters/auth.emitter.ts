import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { User } from "../../_models/interfaces/user";
import { UserService } from "../application/user.service";

@Injectable()
export class AuthEmitter {

    private loginAnnouncedSource = new Subject<User>();
    private logoutAnnouncedSource = new Subject();

    loginAnnounced$ = this.loginAnnouncedSource.asObservable();
    logoutAnnounced$ = this.logoutAnnouncedSource.asObservable();

    constructor() {}

    announceLogin(loggedInUser: User) {
        this.loginAnnouncedSource.next(loggedInUser);
    }

    announceLogout() {
        this.logoutAnnouncedSource.next();
    }

}
