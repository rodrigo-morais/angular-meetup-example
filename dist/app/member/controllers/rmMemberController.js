define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmMemberController = function ($scope) {
        $scope.name = "Rodrigo";
    };

    rmMemberController.$inject = ["$scope"];

    module.exports = rmMemberController;
});