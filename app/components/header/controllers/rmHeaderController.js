var rmHeaderController = ($scope, $rootScope) => {
    $rootScope.logged = false;

    $scope.connect = (token, expiresIn) => {
        $scope.$apply(() => {
            $rootScope.token = token;
            $rootScope.expiresIn = expiresIn;
            $rootScope.logged = true;
        });
    };

    $scope.disconnect = () => {
        $rootScope.logged = false;
    };
};

rmHeaderController.$inject = ['$scope', '$rootScope'];

export default rmHeaderController;