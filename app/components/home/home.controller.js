(function () {
    'use strict';

    angular.module('fuelComparatorApp').controller('homeController', homeController);
    homeController.$inject = ["$scope", "$http", "$window", "$q", "homeService"];

    function homeController($scope, $http, $window, $q, homeService) {
        var vm = this;
        vm.angularstrapService = homeService;
        homeService.$inject = ['$http'];
    }
})();