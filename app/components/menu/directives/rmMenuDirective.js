import rmMenuController from "components/menu/controllers/rmMenuController";

var rmMenuDirective = () => {
    

    let html = 'app/components/menu/templates/menu.html';

    return {
        restrict: 'E',
        templateUrl: html,
        css: 'app/components/menu/css/menu.css',
        replace: true,
        controller: rmMenuController,
        link: function (scope, element, attrs, controller) {
            
        }
    };
};

rmMenuDirective.$inject = [];

export default rmMenuDirective;