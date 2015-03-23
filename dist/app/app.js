define(["exports", "header/controllers/rmHeaderController", "header/directives/rmHeaderDirective"], function (exports, _headerControllersRmHeaderController, _headerDirectivesRmHeaderDirective) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var rmHeaderController = _interopRequire(_headerControllersRmHeaderController);

    var rmHeaderDirective = _interopRequire(_headerDirectivesRmHeaderDirective);

    var app = angular.module("myApp", ["rmMeetup", "door3.css"]);

    app.config(["rmConsumerProvider", function (rmConsumerProvider) {
        rmConsumerProvider.setKey("1h82intl8imm92ivovvphp0f9c");
        rmConsumerProvider.setRedirectURI("http://localhost:8080");
    }]);

    app.controller("rmHeaderController", ["$scope", rmHeaderController]);
    app.directive("rmHeader", ["$window", "rmConsumer", "OauthAccess", rmHeaderDirective]);

    return app;
});