"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BaThemePreloader = (function () {
    function BaThemePreloader() {
    }
    BaThemePreloader.registerLoader = function (method) {
        BaThemePreloader._loaders.push(method);
    };
    BaThemePreloader.clear = function () {
        BaThemePreloader._loaders = [];
    };
    BaThemePreloader.load = function () {
        return new Promise(function (resolve, reject) {
            BaThemePreloader._executeAll(resolve);
        });
    };
    BaThemePreloader._executeAll = function (done) {
        setTimeout(function () {
            Promise.all(BaThemePreloader._loaders).then(function (values) {
                done.call(null, values);
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    BaThemePreloader._loaders = [];
    BaThemePreloader = __decorate([
        core_1.Injectable()
    ], BaThemePreloader);
    return BaThemePreloader;
}());
exports.BaThemePreloader = BaThemePreloader;
