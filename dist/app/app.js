"use strict";

var app = angular.module("myApp", ["rmMeetup"]).config(["rmConsumerProvider", function (rmConsumerProvider) {
    rmConsumerProvider.setKey("li1i10kfumgoi7sk58stlhjac");
    rmConsumerProvider.setRedirectURI("http://rodrigo-morais.github.io");
}]);
//# sourceMappingURL=app.js.map