'use strict';

import rmHeaderDirective from "components/header/directives/rmHeaderDirective";
import rmMenuDirective from "components/menu/directives/rmMenuDirective";
import rmMemberController from "member/controllers/rmMemberController";

let app = angular.module('myApp', ['ngRoute', 'rmMeetup','door3.css']);

app.config(
    [
        'rmConsumerProvider',
        (rmConsumerProvider) => {
            rmConsumerProvider.setKey('1h82intl8imm92ivovvphp0f9c');
            rmConsumerProvider.setRedirectURI('http://localhost:8080');
        }
    ]
);

app.config([
  '$routeProvider',
  '$locationProvider',
  ($routeProvider, $locationProvider) => {
    $routeProvider.
      when('/member', {
        templateUrl: 'app/member/templates/member.html',
        controller: rmMemberController
      }).
      otherwise({
        redirectTo: function(){
          let pathname = window.location.pathname;
          if( pathname.split('access_token').length > 1 &&
              pathname.split('expires_in').length > 1
          ) {
            return pathname;
          }
          else{
            return '/';
          }
        }
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);

app.directive('rmHeader',
    ['$window', 'rmConsumer', 'OauthAccess',rmHeaderDirective]);
app.directive('rmMenu', [rmMenuDirective]);

return app;