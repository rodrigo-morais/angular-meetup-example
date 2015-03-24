define(["exports", "components/header/directives/rmHeaderDirective", "components/menu/directives/rmMenuDirective"], function (exports, _componentsHeaderDirectivesRmHeaderDirective, _componentsMenuDirectivesRmMenuDirective) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var rmHeaderDirective = _interopRequire(_componentsHeaderDirectivesRmHeaderDirective);

    var rmMenuDirective = _interopRequire(_componentsMenuDirectivesRmMenuDirective);

    var app = angular.module("myApp", ["rmMeetup", "door3.css"]);

    app.config(["rmConsumerProvider", function (rmConsumerProvider) {
        rmConsumerProvider.setKey("1h82intl8imm92ivovvphp0f9c");
        rmConsumerProvider.setRedirectURI("http://localhost:8080");
    }]);

    app.directive("rmHeader", ["$window", "rmConsumer", "OauthAccess", rmHeaderDirective]);
    app.directive("rmMenu", [rmMenuDirective]);

    return app;
});