import {FORM_DIRECTIVES} from '@angular/common';
import {Component} from '@angular/core';

import {UserService} from "../shared/index";

@Component({
    selector: 'pc-login',
    templateUrl: 'app/+login/login.component.html',
    styleUrls: ['app/+login/login.component.css'],
    directives: [FORM_DIRECTIVES]
})
/**
 * This class represents the lazy loaded LoginComponent.
 */
export class LoginComponent {

    newName:string;

    /**
     * Creates an instance of the LoginComponent with the injected
     * UserService.
     *
     * @param {UserService} userService the injected UserService
     */
    constructor(public userService:UserService) {
    }

    login(email: string, password: string) {
        this.userService.loginUser(email, password);
    }
}
