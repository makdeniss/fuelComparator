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
            factory.flag =  {
                Message: "what flag is this?"
            };
            factory.value = passedValue
        }

        return factory;
    }
})();