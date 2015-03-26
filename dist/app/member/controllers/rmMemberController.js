define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmMemberController = function ($scope, $rootScope, rmMeetupMembersService) {
        rmMeetupMembersService.getLoggedMember($rootScope.token).then(function (member) {
            $scope.member = member;
        });
    };

    rmMemberController.$inject = ["$scope", "$rootScope", "rmMeetupMembersService"];

    module.exports = rmMemberController;
});