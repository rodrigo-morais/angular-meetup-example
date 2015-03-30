var rmTokenController = ($scope, rmMeetupOauthService) => {
    var oauthAccess = rmMeetupOauthService.getOauthAccess();

    $scope.accessCode = oauthAccess.tokenAccess;
    $scope.expiresIn = oauthAccess.expiresIn;
};

rmTokenController.$inject = ['$scope', 'rmMeetupOauthService'];

export default rmTokenController;