(function () {
    'use strict';

    angular.module('fuelComparatorApp.homeServices', []).service('sayHelloService', sayHelloService);
    sayHelloService.$inject = ['$http', '$q'];

    function sayHelloService($http, q) {

        const factory = {
            //properties
            sayHi: sayHi
        };

        function sayHi(){
            var defer = $q.defer();
            // this will always resolve because this is hardcoded
            defer.resolve();
            console.log("hi from home service");

            return defer.promise
        }

        return factory;
    }
})();