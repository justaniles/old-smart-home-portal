import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';

import {AboutComponent} from './+about/index';
import {HomeComponent} from './+home/index';
import {LoginComponent} from './+login/index';
import {UserService, NameListService, NavbarComponent, ToolbarComponent} from './shared/index';

@Component({
    selector: 'pc-app',
    viewProviders: [NameListService, UserService],
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@Routes([
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/about',
        component: AboutComponent
    },
    {
        path: "/login",
        component: LoginComponent
    }
])
/**
 * This class represents the main application component.
 * Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy
 * loaded components (LoginComponent, AboutComponent).
 */
export class AppComponent {
}
