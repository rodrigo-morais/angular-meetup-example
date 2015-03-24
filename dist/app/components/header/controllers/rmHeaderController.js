define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmHeaderController = function ($scope, $rootScope) {
        $scope.logged = false;

        $scope.connect = function (token, expiresIn) {
            $scope.$apply(function () {
                $rootScope.token = token;
                $rootScope.expiresIn = expiresIn;
                $scope.logged = true;
            });
        };

        $scope.disconnect = function () {
            $scope.logged = false;
        };
    };

    rmHeaderController.$inject = ["$scope", "$rootScope"];

    module.exports = rmHeaderController;
});