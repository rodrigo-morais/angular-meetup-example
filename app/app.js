'use strict';

import rmHeaderDirective from "components/header/directives/rmHeaderDirective";
import rmMenuDirective from "components/menu/directives/rmMenuDirective";

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

app.directive('rmHeader',
    ['$window', 'rmConsumer', 'OauthAccess',rmHeaderDirective]);
app.directive('rmMenu', [rmMenuDirective]);

return app;