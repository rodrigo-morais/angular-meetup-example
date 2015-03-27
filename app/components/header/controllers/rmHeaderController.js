var rmHeaderController = ($scope, $rootScope, $location) => {
    $rootScope.logged = false;

    $scope.connect = (token, expiresIn) => {
        $scope.$apply(() => {
            $rootScope.token = token;
            $rootScope.expiresIn = expiresIn;
            $rootScope.logged = true;

            let module = angular.module('myApp');
        });
    };

    $scope.disconnect = () => {
        $rootScope.logged = false;
        $location.path('/');
    };
};

rmHeaderController.$inject = ['$scope', '$rootScope', '$location'];

export default rmHeaderController;