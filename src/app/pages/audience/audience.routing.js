"use strict";
var router_1 = require('@angular/router');
var audience_component_1 = require('./audience.component');
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: audience_component_1.Audience,
        children: []
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
