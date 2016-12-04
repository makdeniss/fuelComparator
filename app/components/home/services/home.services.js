(function () {
    'use strict';

    angular.module('fuelComparatorApp.homeService', []).service('homeService', homeService);
    
    function homeService() {
        function showHome() {
            console.log("welome blah blah");
        }
    }
})();