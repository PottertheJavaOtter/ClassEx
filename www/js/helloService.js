(function() {
'use strict';

    angular
        .module('starter')
        .service('helloService', helloService);

    helloService.$inject = [];
    function helloService() {
        var helloString = "Hello";

        var service = {
            getHelloString: getHelloString
        };

        return service;

        function getHelloString() {
            changeStringAgain();
            return helloString;
        }

        function changeStringAgain() {
            helloString = "changed";
        }
    }
})();