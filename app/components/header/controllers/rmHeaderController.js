var rmHeaderController = ($scope, $rootScope) => {
    $scope.logged = false;

    $scope.connect = (token, expiresIn) => {
        $scope.$apply(() => {
            $rootScope.token = token;
            $rootScope.expiresIn = expiresIn;
            $scope.logged = true;
        });
    };

    $scope.disconnect = () => {
        $scope.logged = false;
    };
};

rmHeaderController.$inject = ['$scope', '$rootScope'];

export default rmHeaderController;