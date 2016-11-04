(function() {
'use strict';

    angular
        .module('hello')
        .controller('HelloController', HelloController);

    HelloController.$inject = ['helloService'];
    function HelloController(helloService) {
        var helloVm = this;
        helloVm.helloString = "";
        helloVm.changeString = changeString;

        activate();

        ////////////////

        function activate() { 
            helloVm.helloString = helloService.getHelloString();
        }

        function changeString() {
            console.log("change");
            helloVm.helloString = "Changed";
        }
    }
})();