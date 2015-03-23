define(["exports", "module"], function (exports, module) {
    "use strict";

    module.exports = rmHeaderController;

    /*(function(){
        'use strict';
    
        app.controller('rmHeaderController',
        ['$scope', rmHeaderController]);
    
        function rmHeaderController($scope){
            $scope.logged = false;
    
            $scope.connect = function(token, expiresIn){
                $scope.$apply(function() {
                    $scope.logged = true;
                });
            };
    
            $scope.disconnect = function(){
                $scope.logged = false;
            };
        }
    
    })();*/

    function rmHeaderController($scope) {
        $scope.logged = false;

        $scope.connect = function (token, expiresIn) {
            $scope.$apply(function () {
                $scope.logged = true;
            });
        };

        $scope.disconnect = function () {
            $scope.logged = false;
        };
    }
});