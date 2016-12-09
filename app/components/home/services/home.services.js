(function () {
    'use strict';

    angular.module('fuelComparatorApp.homeServices', [])
        .service('sayHelloService', sayHelloService)
        .service('someService', someService);

    sayHelloService.$inject = ['$http', '$q'];
    someService.$inject = ['$http', '$q'];

    function someService() {
        const factory = {
            someMessageObject: [],
            someServiceMessage : someServiceMessage
        };
        
        function someServiceMessage() {
            factory.someMessageObject = {
                someMessageString: "Some message from someService.someServiceMessage"
            };
        }
        
        return factory;
    }

    // bad design. one service and one function per service.
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
                Message: "hello message from helloService.sayHelloService()!"
            };
        }

        function sayBye(){
            factory.byeMessage =  {
                Message: "bye message from helloService.sayBye()!"
            };
        }

        return factory;
    }
})();