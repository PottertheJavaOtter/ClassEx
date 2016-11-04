(function () {
  'use strict';

  angular.module('starter', [
    'ionic',
    'hello'
  ]);
})();

(function () {
  'use strict';

  angular
    .module('starter')
    .run(mainRun);

  mainRun.$inject = ['$ionicPlatform'];

  function mainRun($ionicPlatform) {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
      StatusBar.overlaysWebView(false);
    }


  }
})();
