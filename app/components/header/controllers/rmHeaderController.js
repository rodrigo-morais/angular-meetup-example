var rmHeaderController = ($scope) => {
    $scope.logged = false;

    $scope.connect = (token, expiresIn) => {
        $scope.$apply(() => {
            $scope.logged = true;
        });
    };

    $scope.disconnect = () => {
        $scope.logged = false;
    };
};

rmHeaderController.$inject = ['$scope'];

export default rmHeaderController;