(function () {
    'use strict';

    angular.module('fuelComparatorApp.flagService', []).service('flagMainService', flagMainService);

    flagMainService.$inject = ['$http', '$q'];

    function flagMainService() {
        const factory = {
            //properties
            value: "",
            flag: [],
            whichFlag: whichFlag
        };
        function whichFlag(passedValue){
            factory.value = passedValue;
            factory.flag =  {
                Message: "message from flagMainService.whichFlag() with passed parameter: " + factory.value + "! "
            };
        }

        return factory;
    }
})();