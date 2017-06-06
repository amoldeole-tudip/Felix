"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BaThemeSpinner = (function () {
    function BaThemeSpinner() {
        //Initial View Loading Spinner
        this._selector = 'preloader';
        //Spiner for show any long openrations
        this._contentselector = 'preloaderContent';
        this._element = document.getElementById(this._selector);
        this._contentElement = document.getElementById(this._contentselector);
    }
    BaThemeSpinner.prototype.show = function () {
        this._element.style['display'] = 'block';
    };
    BaThemeSpinner.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this._element.style['display'] = 'none';
        }, delay);
    };
    BaThemeSpinner.prototype.showProgress = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this._contentElement.style['display'] = 'block';
        }, delay);
    };
    BaThemeSpinner.prototype.hideProgress = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            _this._contentElement.style['display'] = 'none';
        }, delay);
    };
    BaThemeSpinner = __decorate([
        core_1.Injectable()
    ], BaThemeSpinner);
    return BaThemeSpinner;
}());
exports.BaThemeSpinner = BaThemeSpinner;
