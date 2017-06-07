"use strict";
var router_1 = require('@angular/router');
var settings_component_1 = require('./settings.component');
// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: settings_component_1.Settings,
        children: []
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
