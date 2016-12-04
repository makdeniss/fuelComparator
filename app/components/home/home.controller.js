(function () {
    'use strict';

    angular.module('fuelComparatorApp').controller('homeController', homeController);
    homeController.$inject = ["$scope", "$http", "$window", "$q", "sayHelloService"];

    function homeController($scope, $http, $window, $q, sayHelloService) {
        const vm = this;
        vm.fuelComparatorService = sayHelloService;
        sayHelloService.sayHi();
        return vm;
    }
})();