define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmHeaderController = function ($scope, $rootScope) {
        $rootScope.logged = false;

        $scope.connect = function (token, expiresIn) {
            $scope.$apply(function () {
                $rootScope.token = token;
                $rootScope.expiresIn = expiresIn;
                $rootScope.logged = true;
            });
        };

        $scope.disconnect = function () {
            $rootScope.logged = false;
        };
    };

    rmHeaderController.$inject = ["$scope", "$rootScope"];

    module.exports = rmHeaderController;
});