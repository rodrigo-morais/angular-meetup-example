var rmMenuController = ($scope) => {
    $scope.menus = [
        {
            text: 'Show Member',
            link: '/member',
            selected: false
        }
    ];

    $scope.select = (menu) => {
        $scope.menus.forEach(function(_menu){
            _menu.selected = false;
        });
        menu.selected = true;
    };
};

rmMenuController.$inject = ['$scope'];

export default rmMenuController;