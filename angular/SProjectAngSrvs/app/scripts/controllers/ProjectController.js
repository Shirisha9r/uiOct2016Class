//IIFE Construct

(function(angular){
  'use strict';
  function ProjectController($rootScope,$scope,userFactory,$location){

    // the drawback of singleton service is that someone can easily update the values of the object
   // if we use this.... $scope.user = userFactory.user; instead, we use the one below
    // create a clone or duplicate the user in the factory..to perform deeply linked
   $scope.user = angular.copy(userFactory.user);

   console.log($scope.user);
   if($scope.user.username === '' && $scope.user.password === ''){
    $location.path('/home');
   }

  }
  ProjectController.$inject = ['$scope','$rootScope','userFactory','$location'];

 // call a module from app.js and define the controller

 angular.module('ProjApp_Controllers').controller('projectController',ProjectController);


})(window.angular || (window.angular = {}));

