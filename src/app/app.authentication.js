"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AuthenticationHelper = (function () {
    function AuthenticationHelper(route) {
        this.route = route;
        this.userValueChanged = new core_1.EventEmitter(true);
        this.vendorValueChanged = new core_1.EventEmitter(true);
        this.vendorCategoryValueChanged = new core_1.EventEmitter(true);
        this.vendorAdminValueChanged = new core_1.EventEmitter(true);
        this.vendorLocationValueChanged = new core_1.EventEmitter(true);
        this.vendorServicesValueChanged = new core_1.EventEmitter(true);
        this.LocationAdminValueChanged = new core_1.EventEmitter(true);
        this.sessionDefinitionValueChanged = new core_1.EventEmitter(true);
        this.sessionValueChangedForManaged = new core_1.EventEmitter(true);
        this.user = {
            'role': 'none',
            'token': 'none',
            'id': '',
            'name': ''
        };
        this.selectedSessionData = {};
    }
    AuthenticationHelper.prototype.setName = function (name) {
        this.user.name = name;
        sessionStorage.setItem('name', name);
    };
    AuthenticationHelper.prototype.getName = function () {
        return sessionStorage.getItem('name');
    };
    AuthenticationHelper.prototype.setUser = function (role) {
        this.user.role = role;
        sessionStorage.setItem('role', role);
    };
    AuthenticationHelper.prototype.getUser = function () {
        return sessionStorage.getItem('role');
    };
    AuthenticationHelper.prototype.setToken = function (token) {
        sessionStorage.setItem('token', token);
        this.user.token = token;
    };
    AuthenticationHelper.prototype.getToken = function () {
        return sessionStorage.getItem('token');
    };
    AuthenticationHelper.prototype.setUserId = function (id) {
        this.user.id = id;
        sessionStorage.setItem('id', id);
    };
    AuthenticationHelper.prototype.getUserId = function () {
        return sessionStorage.getItem('id');
    };
    AuthenticationHelper.prototype.redirectToLogin = function () {
        this.route.navigate(['login']);
    };
    AuthenticationHelper.prototype.isLoggedIn = function () {
        var token = this.getToken();
        if (token && token.length > 0) {
            return true;
        }
        return false;
    };
    AuthenticationHelper.prototype.userValueChange = function (value) {
        this.userValueChanged.emit(value);
    };
    AuthenticationHelper.prototype.getuserValueChanged = function () {
        return this.userValueChanged;
    };
    AuthenticationHelper.prototype.vendorValueChange = function (value) {
        this.vendorValueChanged.emit(value);
    };
    AuthenticationHelper.prototype.getVendorValueChanged = function () {
        return this.vendorValueChanged;
    };
    AuthenticationHelper.prototype.vendorAdminValueChange = function (value) {
        this.vendorAdminValueChanged.emit(value);
    };
    AuthenticationHelper.prototype.getVendorAdminValueChanged = function () {
        return this.vendorAdminValueChanged;
    };
    AuthenticationHelper.prototype.vendorCategoryValueChange = function (value) {
        this.vendorCategoryValueChanged.emit(value);
    };
    AuthenticationHelper.prototype.getVendorCategoryValueChanged = function () {
        return this.vendorCategoryValueChanged;
    };
    AuthenticationHelper.prototype.vendorLocationValueChange = function (value) {
        this.vendorLocationValueChanged.emit(value);
    };
    AuthenticationHelper.prototype.getVendorLocationValueChanged = function () {
        return this.vendorLocationValueChanged;
    };
    AuthenticationHelper.prototype.vendorServicesValueChange = function (value) {
        this.vendorServicesValueChanged.emit(value);
    };
    AuthenticationHelper.prototype.getVendorServicesValueChanged = function () {
        return this.vendorServicesValueChanged;
    };
    AuthenticationHelper.prototype.locationAdminValueChange = function (value) {
        this.LocationAdminValueChanged.emit(value);
    };
    AuthenticationHelper.prototype.getLocationAdminValueChanged = function () {
        return this.LocationAdminValueChanged;
    };
    AuthenticationHelper.prototype.sessionDefinitionValueChange = function (value) {
        this.sessionDefinitionValueChanged.emit(value);
    };
    AuthenticationHelper.prototype.getsessionDefinitionValueChanged = function () {
        return this.sessionDefinitionValueChanged;
    };
    AuthenticationHelper.prototype.sessionValueChangedForManage = function (value) {
        this.sessionValueChangedForManaged.emit(value);
    };
    AuthenticationHelper.prototype.getsessionValueChangedForManage = function () {
        return this.sessionValueChangedForManaged;
    };
    __decorate([
        core_1.Output()
    ], AuthenticationHelper.prototype, "userValueChanged", void 0);
    __decorate([
        core_1.Output()
    ], AuthenticationHelper.prototype, "vendorValueChanged", void 0);
    __decorate([
        core_1.Output()
    ], AuthenticationHelper.prototype, "vendorCategoryValueChanged", void 0);
    __decorate([
        core_1.Output()
    ], AuthenticationHelper.prototype, "vendorAdminValueChanged", void 0);
    __decorate([
        core_1.Output()
    ], AuthenticationHelper.prototype, "vendorLocationValueChanged", void 0);
    __decorate([
        core_1.Output()
    ], AuthenticationHelper.prototype, "vendorServicesValueChanged", void 0);
    __decorate([
        core_1.Output()
    ], AuthenticationHelper.prototype, "LocationAdminValueChanged", void 0);
    __decorate([
        core_1.Output()
    ], AuthenticationHelper.prototype, "sessionDefinitionValueChanged", void 0);
    __decorate([
        core_1.Output()
    ], AuthenticationHelper.prototype, "sessionValueChangedForManaged", void 0);
    AuthenticationHelper = __decorate([
        core_1.Injectable()
    ], AuthenticationHelper);
    return AuthenticationHelper;
}());
exports.AuthenticationHelper = AuthenticationHelper;
