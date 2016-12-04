(function () {
    'use strict';

    angular.module('fuelComparatorApp.homeServices', []).service('sayHelloService', sayHelloService);

    function sayHelloService() {
        function sayHi() {
            console.log("hi from home service");
        }
    }
})();