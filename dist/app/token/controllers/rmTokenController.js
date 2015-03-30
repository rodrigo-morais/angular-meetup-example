define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmTokenController = function ($scope, rmMeetupOauthService) {
        var oauthAccess = rmMeetupOauthService.getOauthAccess();

        $scope.accessCode = oauthAccess.tokenAccess;
        $scope.expiresIn = oauthAccess.expiresIn;
    };

    rmTokenController.$inject = ["$scope", "rmMeetupOauthService"];

    module.exports = rmTokenController;
});