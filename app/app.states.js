angular.module('fuelComparatorApp')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        // any unknown URLS go to 404
        $urlRouterProvider.otherwise('/404');
        // no route goes to index
        $urlRouterProvider.when('', '/');
        // use a state provider for routing

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/components/home/views/home.view.html',
                controller: "homeController",
                controllerAs: 'ctrl'
            })
            .state('404', {
                url: '/404',
                templateUrl: 'app/shared/404.html'
            });
            // .state('about', {
            //     // we'll add another state soon
            //     url: '/about',
            //     templateUrl: 'app/components/about/views/about.view.html',
            //     controller: 'aboutController',
            //     controllerAs: 'ctrl'
            // });
    }]);

