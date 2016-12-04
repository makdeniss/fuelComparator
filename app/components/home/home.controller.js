(function () {
    'use strict';

    angular.module('fuelComparatorApp').controller('homeController', homeController);
    homeController.$inject = ["$scope", "$http", "$window", "$q", "sayHelloService"];

    function homeController($scope, $http, $window, $q, sayHelloService) {
        var vm = this;
        vm.angularstrapService = sayHelloService;
        sayHelloService();
    }
})();