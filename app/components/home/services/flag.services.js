(function () {
    'use strict';

    angular.module('fuelComparatorApp.flagService', []).service('flagMainService', flagMainService);

    flagMainService.$inject = ['$http', '$q'];

    function flagMainService() {
        const factory = {
            //properties
            flag: [],
            whichFlag: whichFlag
        };
        function whichFlag(){
            factory.flag =  {
                Message: "what flag is this?"
            };
        }

        return factory;
    }
})();