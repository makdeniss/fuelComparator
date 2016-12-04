(function () {
    'use strict';

    angular.module('fuelComparatorApp.homeServices', []).service('sayHelloService', sayHelloService);

    function sayHelloService() {
        function hello() {
            console.log("hi from home servie");
        }
    }
})();