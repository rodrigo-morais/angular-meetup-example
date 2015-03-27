define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmHeaderController = function ($scope, $rootScope, $location) {
        $rootScope.logged = false;

        $scope.connect = function (token, expiresIn) {
            $scope.$apply(function () {
                $rootScope.token = token;
                $rootScope.expiresIn = expiresIn;
                $rootScope.logged = true;

                var module = angular.module("myApp");
            });
        };

        $scope.disconnect = function () {
            $rootScope.logged = false;
            $location.path("/");
        };
    };

    rmHeaderController.$inject = ["$scope", "$rootScope", "$location"];

    module.exports = rmHeaderController;
});