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
        define(["require", "exports", "angular2/core", "./button", "./menu-panel"], factory);
    }
})(function (require, exports) {
    var core_1 = require("angular2/core");
    var button_1 = require("./button");
    var menu_panel_1 = require("./menu-panel");
    var MenuBar = (function () {
        function MenuBar() {
            this.isMenuOpen = false;
        }
        MenuBar.prototype.toggleMenuPanel = function () {
            this.isMenuOpen = !this.isMenuOpen;
        };
        MenuBar.prototype.onMenuClose = function () {
            this.isMenuOpen = false;
        };
        __decorate([
            core_1.Input()
        ], MenuBar.prototype, "title");
        MenuBar = __decorate([
            core_1.Component({
                directives: [button_1.ButtonComponent, menu_panel_1.MenuPanel],
                selector: "feel-menu-bar",
                template: "<feel-button [text]=\"'M'\" (click)=toggleMenuPanel()></feel-button>\n               <div class=\"title\">\n                <h1>{{title}}</h1>\n                </div>\n               <feel-menu-panel [open]=\"isMenuOpen\" (close)=\"onMenuClose()\"></feel-menu-panel>"
            })
        ], MenuBar);
        return MenuBar;
    })();
    exports.MenuBar = MenuBar;
});