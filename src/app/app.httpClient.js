"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var HttpClientHelper = (function () {
    function HttpClientHelper(http, router, authentication) {
        this.http = http;
        this.router = router;
        this.authentication = authentication;
        this.baseUrl = 'http://ec2-35-162-115-235.us-west-2.compute.amazonaws.com:8080/';
        this.http = http;
    }
    HttpClientHelper.prototype.createAuthorizationHeader = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Whytoq-Auth-Token', sessionStorage.getItem('token'));
        return headers;
    };
    HttpClientHelper.prototype.get = function (url) {
        url = this.baseUrl + url;
        var headers = this.createAuthorizationHeader();
        return this.http.get(url, { headers: headers })
            .map(this.extractResponse)
            .catch(this.handleError);
    };
    HttpClientHelper.prototype.postPreLogin = function (url, data) {
        var body = JSON.stringify(data);
        var headers = new http_1.Headers();
        // headers.append('X-Requested-With', 'XMLHttpRequest');
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        return this.http.post(url, body, { headers: headers })
            .map(this.extractResponse)
            .catch(this.handleError);
    };
    HttpClientHelper.prototype.post = function (url, data) {
        var body = JSON.stringify(data);
        var headers = this.createAuthorizationHeader();
        url = this.baseUrl + url;
        return this.http.post(url, body, { headers: headers })
            .map(this.extractResponse)
            .catch(this.handleError);
    };
    HttpClientHelper.prototype.delete = function (url) {
        var options;
        var headers = this.createAuthorizationHeader();
        options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete(this.baseUrl + url, options)
            .map(this.extractResponse)
            .catch(this.handleError);
    };
    HttpClientHelper.prototype.extractResponse = function (res) {
        var body = res.json();
        return body.WhyToQueueResponse;
    };
    HttpClientHelper.prototype.handleError = function (error) {
        var result = error.json();
        console.log(error, 'ekfjkfbe');
        if (!result || !result.error_message) {
            result.error_message = 'Unexpected Error Occured at server';
        }
        return Observable_1.Observable.throw(result || 'Server error');
    };
    HttpClientHelper = __decorate([
        core_1.Injectable()
    ], HttpClientHelper);
    return HttpClientHelper;
}());
exports.HttpClientHelper = HttpClientHelper;
