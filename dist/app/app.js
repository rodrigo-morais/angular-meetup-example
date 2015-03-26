define(["exports", "components/header/directives/rmHeaderDirective", "components/menu/directives/rmMenuDirective", "member/controllers/rmMemberController"], function (exports, _componentsHeaderDirectivesRmHeaderDirective, _componentsMenuDirectivesRmMenuDirective, _memberControllersRmMemberController) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var rmHeaderDirective = _interopRequire(_componentsHeaderDirectivesRmHeaderDirective);

  var rmMenuDirective = _interopRequire(_componentsMenuDirectivesRmMenuDirective);

  var rmMemberController = _interopRequire(_memberControllersRmMemberController);

  var app = angular.module("myApp", ["ngRoute", "rmMeetup", "door3.css"]);

  app.config(["rmConsumerProvider", function (rmConsumerProvider) {
    rmConsumerProvider.setKey("1h82intl8imm92ivovvphp0f9c");
    rmConsumerProvider.setRedirectURI("http://localhost:8080");
  }]);

  app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider.when("/member", {
      templateUrl: "app/member/templates/member.html",
      controller: rmMemberController
    }).otherwise({
      redirectTo: function redirectTo() {
        var pathname = window.location.pathname;
        if (pathname.split("access_token").length > 1 && pathname.split("expires_in").length > 1) {
          return pathname;
        } else {
          return "/";
        }
      }
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);

  app.directive("rmHeader", ["$window", "rmConsumer", "OauthAccess", rmHeaderDirective]);
  app.directive("rmMenu", [rmMenuDirective]);

  return app;
});