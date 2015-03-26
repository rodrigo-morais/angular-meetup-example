define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmMenuController = function ($scope) {
        $scope.menus = [{
            text: "Show Member",
            link: "/member",
            selected: false
        }];

        $scope.select = function (menu) {
            $scope.menus.forEach(function (_menu) {
                _menu.selected = false;
            });
            menu.selected = true;
        };
    };

    rmMenuController.$inject = ["$scope"];

    module.exports = rmMenuController;
});