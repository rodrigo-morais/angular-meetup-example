'use strict';

import rmHeaderDirective from "components/header/directives/rmHeaderDirective";
import rmMenuDirective from "components/menu/directives/rmMenuDirective";

var app = angular.module('myApp', ['ngRoute', 'rmMeetup','door3.css']);

app.config(
    [
        'rmConsumerProvider',
        function(rmConsumerProvider) {
            rmConsumerProvider.setKey('1h82intl8imm92ivovvphp0f9c');
            rmConsumerProvider.setRedirectURI('http://localhost:8080');
        }
    ]
);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/member', {
        templateUrl: 'templates/member.html',/*
        controller: 'PhoneListCtrl'*/
      })/*.
      otherwise({
        redirectTo: '/'
      })*/;

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]
);

app.directive('rmHeader',
    ['$window', 'rmConsumer', 'OauthAccess',rmHeaderDirective]);
app.directive('rmMenu', [rmMenuDirective]);

return app;