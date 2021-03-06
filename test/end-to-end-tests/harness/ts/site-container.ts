import { Component, provide } from "angular2/core";
import {bootstrap}    from "angular2/platform/browser"
//import { RouteConfig,  RouterOutlet } from "angular2/router";
import {ROUTER_PROVIDERS } from 'angular2/router';
import { APP_BASE_HREF } from "angular2/platform/common";
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route} from 'angular2/router';
import { ButtonPage } from "./button-page";
import { InputPage } from "./input-page";
import { TablePage } from "./table-page";
import { SliderPage } from "./slider-page";
import { CheckboxPage } from "./checkbox-page";
import { NotificationsPage } from "./notifications-page";
import { MenuBar } from "feel-ui/feel-ui";
//import * as NineTails from "nine-tails";

@Component({
    directives: [ ButtonPage, MenuBar, ROUTER_DIRECTIVES ],
    selector: "my-app",
    template: `<feel-menu-bar [title]="'Feel'"></feel-menu-bar>
               <router-outlet></router-outlet>`
})
@RouteConfig([
    {path: "/",        component: ButtonPage, name: "Home"},
    {path: "/buttons",        component: ButtonPage, name: "Buttons"},
    {path: "/input", component: InputPage, name: "Input"  },
    {path: "/notifications", component: NotificationsPage, name: "Notifications"  },
    {path: "/table", component: TablePage, name: "Table"  },
    {path: "/slider", component: SliderPage, name: "Slider"  },
    {path: "/checkbox", component: CheckboxPage, name: "Checkbox"  }
])
export class SiteContainer {

  public constructor () {
    /*let theme = new NineTails.Theme();
    var rule = theme.createRule("feel-menu-bar");

    var color = new NineTails.Color();
    color.set("red");

    rule.linkStyle("color", color);*/
  }
}
bootstrap(SiteContainer, [ ROUTER_PROVIDERS, provide(APP_BASE_HREF, {useValue: '/'}) ]);
