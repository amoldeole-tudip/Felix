"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var settings_component_1 = require('./settings.component');
var settings_routing_1 = require('./settings.routing');
var forms_1 = require('@angular/forms');
var settingsModule = (function () {
    function settingsModule() {
    }
    settingsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                settings_routing_1.routing,
            ],
            declarations: [
                settings_component_1.Settings
            ],
            providers: []
        })
    ], settingsModule);
    return settingsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = settingsModule;
