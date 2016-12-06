(function () {
    'use strict';

    angular.module('fuelComparatorApp').controller('homeController', homeController);
    homeController.$inject = ["$scope", "$http", "$window", "$q", "sayHelloService"];

    function homeController($scope, $http, $window, $q, sayHelloService) {
        const vm = this;
        vm.fuelComparatorService = sayHelloService;
        sayHelloService.sayHi();
        sayHelloService.sayBye();
        vm.hello = sayHelloService.helloMessage.Message;
        vm.bye = sayHelloService.byeMessage.Message;
        console.log(vm.hello);
        console.log(vm.bye);
        return vm;
    }
})();