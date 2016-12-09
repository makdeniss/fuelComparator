(function () {
    'use strict';

    angular.module('fuelComparatorApp').controller('homeController', homeController);
    homeController.$inject = ["$scope", "$log", "$http", "$window", "$q", "sayHelloService", "someService", "flagMainService"];

    function homeController($scope, $log, $http, $window, $q, sayHelloService, someService, flagMainService) {
        const vm = this;

        // vm.fuelComparatorService = sayHelloService;
        // vm.fuelComparatorService = someService;
        // vm.fuelComparatorService = flagMainService;

        sayHelloService.sayHi();
        sayHelloService.sayBye();
        someService.someServiceMessage();
        flagMainService.whichFlag("incoming parameter");

        vm.hello = sayHelloService.helloMessage.Message;
        vm.bye = sayHelloService.byeMessage.Message;
        vm.someMessage = someService.someMessageObject.someMessageString;
        vm.whichFlag = flagMainService.value;
        vm.whichFlagFull = flagMainService.flag.Message;

        $log.info(vm.hello);
        $log.info(vm.bye);
        $log.info(vm.someMessage);
        $log.info(vm.whichFlag);
        $log.info(vm.whichFlagFull);

        return vm;
    }
})();