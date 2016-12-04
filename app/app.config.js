angular.module('fuelComparatorApp', ['ui.router', 'fuelComparatorApp.homeServices'])
    .constant('CONFIG',
        {
            DebugMode: true,
            StepCounter: 0,
            APIHost: 'http://localhost:12017'
        });
