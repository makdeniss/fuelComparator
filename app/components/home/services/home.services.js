(function () {
    'use strict';

    angular.module('fuelComparatorApp.homeServices', []).service('sayHelloService', sayHelloService);
    sayHelloService.$inject = ['$http', '$q'];

    function sayHelloService() {

        const factory = {
            //properties
            helloMessage: [],
            sayHi: sayHi
        };

        function sayHi(){
            factory.helloMessage =  {
                Message: "hello message from helloService!"
            };
        }

        return factory;
    }
})();