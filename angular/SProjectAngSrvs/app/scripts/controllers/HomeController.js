//IIFE
(function(angular){
  'use strict';
  // callback function for controller
  function HomeController($scope,userFactory,LogintService){
  // as the $scope is connected to the controller  and not the service ( userfactory)
   //will have the empty values.. so we have to pass the values to the service by $scope.user = userFactory.user
    $scope.user = userFactory.user;


      // here we are checking the condition
    $scope.loginUser = function(){

      LogintService.performLogin();

    };

  }
  //inject the dependencies
  HomeController.$inject = ['$scope','userFactory','LogintService'];





  //call the ProjApp_Services module and define the controller
  angular.module('ProjApp_Controllers').controller('homeController',HomeController);





})(window.angular || (window.angular = {}));
