var rmMemberController = ($scope, $rootScope, rmMeetupMembersService) => {
    rmMeetupMembersService.getLoggedMember($rootScope.token).then(function(member){
        $scope.member = member;
    });
};

rmMemberController.$inject = ['$scope', '$rootScope', 'rmMeetupMembersService'];

export default rmMemberController;