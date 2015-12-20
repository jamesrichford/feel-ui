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
        define(["require", "exports", "angular2/core", "angular2/common"], factory);
    }
})(function (require, exports) {
    var core_1 = require("angular2/core");
    var common_1 = require("angular2/common");
    var ButtonComponent = (function () {
        function ButtonComponent() {
        }
        __decorate([
            core_1.Input()
        ], ButtonComponent.prototype, "flat");
        __decorate([
            core_1.Input()
        ], ButtonComponent.prototype, "text");
        ButtonComponent = __decorate([
            core_1.Component({
                directives: [common_1.NgClass],
                selector: "feel-button",
                template: "<button type='button' [ngClass]=\"{ 'btn-flat': flat }\" >{{text}}</button>"
            })
        ], ButtonComponent);
        return ButtonComponent;
    })();
    exports.ButtonComponent = ButtonComponent;
});
