//IIFE Construct
(function(angular){
  'use strict';

  function ShirishaController($scope){
    console.log($scope);
  }
  ShirishaController.$inject = ['$scope'];
  //a project can have multiple modules
  // create a module 'ProjApp_Controllers' we will not inject any dependencies here.. the reason is
  // we will be using 'ProjApp_Controllers' in app.js and this will get the dependensies automatically
  // .controller is creating a controller to the new module
  //usually we define this module in app.js but we call it here
  angular.module('ProjApp_Controllers').controller('shirishaController',ShirishaController);

})(window.angular || (window.angular = {}));
