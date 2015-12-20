var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "angular2/core", "angular2/common", "../src/feel", 'angular2/router'], factory);
    }
})(function (require, exports) {
    var core_1 = require("angular2/core");
    var common_1 = require("angular2/common");
    var feel_1 = require("../src/feel");
    var router_1 = require('angular2/router');
    var MenuPanel = (function () {
        function MenuPanel() {
            this.close = new core_1.EventEmitter();
        }
        MenuPanel.prototype.closeMenuPanel = function () {
            this.open = false;
            this.close.next(null);
        };
        __decorate([
            core_1.Input()
        ], MenuPanel.prototype, "open");
        MenuPanel = __decorate([
            core_1.Component({
                directives: [common_1.NgClass, feel_1.ButtonComponent, router_1.RouterLink],
                selector: "feel-menu-panel",
                events: ['close'],
                template: "<div [ngClass]=\"{ 'show': open }\" >\n                  <div class=\"menu-title\">\n                    <h1>Menu</h1>\n                    <feel-button [text]=\"'X'\" (click)=closeMenuPanel()></feel-button>\n                  </div>\n                  <div class=\"menu-options\">\n                    <a [routerLink]=\"['/Home']\"><div class=\"menu-item\">Home</div></a>\n                    <a [routerLink]=\"['/Buttons']\"><div class=\"menu-item\">Button</div></a>\n                    <a [routerLink]=\"['/Input']\"><div class=\"menu-item\">Input</div></a>\n                  </div>\n               </div>"
            })
        ], MenuPanel);
        return MenuPanel;
    })();
    exports.MenuPanel = MenuPanel;
});