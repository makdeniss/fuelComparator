(function () {
    'use strict';

    angular.module('fuelComparatorApp').controller('homeController', homeController);
    homeController.$inject = ["$scope", "$http", "$window", "$q", "sayHelloService", "someService", "flagMainService"];

    function homeController($scope, $http, $window, $q, sayHelloService, someService, flagMainService) {
        const vm = this;
        // vm.fuelComparatorService = sayHelloService;
        // vm.fuelComparatorService = someService;
        // vm.fuelComparatorService = flagMainService;

        sayHelloService.sayHi();
        sayHelloService.sayBye();
        someService.someServiceMessage();
        flagMainService.whichFlag("parameter passed");

        vm.hello = sayHelloService.helloMessage.Message;
        vm.bye = sayHelloService.byeMessage.Message;
        vm.someMessage = someService.someMessageObject.someMessageString;
        vm.whichFlag = flagMainService.value;
        vm.whichFlagFull = flagMainService.flag.Message;

        console.log(vm.hello);
        console.log(vm.bye);
        console.log(vm.someMessage);
        console.log(vm.whichFlag);
        console.log(vm.whichFlagFull);
        return vm;
    }
})();