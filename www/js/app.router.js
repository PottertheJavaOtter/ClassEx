(function () {
    'use strict';

    angular
        .module('starter')
        .config(appRouter);

    appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appRouter($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('hello', {
            url: '/hello',
            templateUrl: 'templates/hello.html',
            controller: 'HelloController as helloVm'
        })

        $urlRouterProvider.otherwise('hello');
    }
})();