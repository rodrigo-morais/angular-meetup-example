'use strict';

var app = angular.module('myApp', ['rmMeetup','door3.css'])
            .config(
                [
                    "rmConsumerProvider",
                    function(rmConsumerProvider) {
                        rmConsumerProvider.setKey('1h82intl8imm92ivovvphp0f9c');
                        rmConsumerProvider.setRedirectURI('http://localhost:8080');
                    }
                ]
            );