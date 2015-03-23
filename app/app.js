'use strict';

import rmHeaderController from "header/controllers/rmHeaderController";
import rmHeaderDirective from "header/directives/rmHeaderDirective";

var app = angular.module('myApp', ['rmMeetup','door3.css']);

app.config(
    [
        "rmConsumerProvider",
        function(rmConsumerProvider) {
            rmConsumerProvider.setKey('1h82intl8imm92ivovvphp0f9c');
            rmConsumerProvider.setRedirectURI('http://localhost:8080');
        }
    ]
);

app.controller('rmHeaderController', ['$scope', rmHeaderController]);
app.directive('rmHeader',
    ['$window', 'rmConsumer', 'OauthAccess',rmHeaderDirective]);

return app;