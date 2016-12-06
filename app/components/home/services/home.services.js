(function () {
    'use strict';

    angular.module('fuelComparatorApp.homeServices', [])
        .service('sayHelloService', sayHelloService);
    sayHelloService.$inject = ['$http', '$q'];

    function sayHelloService() {
        const factory = {
            //properties
            helloMessage: [],
            sayHi: sayHi,
            byeMessage: [],
            sayBye: sayBye
        };
        function sayHi(){
            factory.helloMessage =  {
                Message: "hello message from helloService!"
            };
        }

        function sayBye(){
            factory.byeMessage =  {
                Message: "bye message from helloService!"
            };
        }

        return factory;
    }
})();