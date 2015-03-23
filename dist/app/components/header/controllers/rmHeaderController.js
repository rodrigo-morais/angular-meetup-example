define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmHeaderController = function ($scope) {
        $scope.logged = false;

        $scope.connect = function (token, expiresIn) {
            $scope.$apply(function () {
                $scope.logged = true;
            });
        };

        $scope.disconnect = function () {
            $scope.logged = false;
        };
    };

    rmHeaderController.$inject = ["$scope"];

    module.exports = rmHeaderController;
});