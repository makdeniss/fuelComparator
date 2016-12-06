(function () {
    'use strict';

    angular.module('fuelComparatorApp').controller('homeController', homeController);
    homeController.$inject = ["$scope", "$http", "$window", "$q", "sayHelloService", "someService"];

    function homeController($scope, $http, $window, $q, sayHelloService, someService) {
        const vm = this;
        vm.fuelComparatorService = sayHelloService;
        vm.fuelComparatorService = someService;

        sayHelloService.sayHi();
        sayHelloService.sayBye();
        someService.someServiceMessage();

        vm.hello = sayHelloService.helloMessage.Message;
        vm.bye = sayHelloService.byeMessage.Message;
        vm.someMessage = someService.someMessageObject.someMessageString;

        console.log(vm.hello);
        console.log(vm.bye);
        console.log(vm.someMessage);
        return vm;
    }
})();