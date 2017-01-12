//IIFE Construct

(function(angular){
  'use strict';
  function ProjectController($rootScope,$scope,userFactory,LogintService){

    // the drawback of singleton service is that someone can easily update the values of the object
   // if we use this.... $scope.user = userFactory.user; instead, we use the one below
    // create a clone or duplicate of the user in the factory..to perform deeply linked copy of
    //the below three steps are executed as soon as the controller is getting initialised

    $scope.init = function(){
      $scope.user = angular.copy(userFactory.user);

      console.log($scope.user);
      LogintService.checkLogin($scope);

    };
    $scope.init();

  }
  ProjectController.$inject = ['$scope','$rootScope','userFactory','LogintService'];

 // call a module from app.js and define the controller

 angular.module('ProjApp_Controllers').controller('projectController',ProjectController);


})(window.angular || (window.angular = {}));

