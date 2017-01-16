//IIFE Construct

(function(angular){
  'use strict';
  function ProjectController($scope){
    $scope.user ={
      firstName: 'Srikar',
      lastName: 'Shastry'
    };
  }
  ProjectController.$inject = ['$scope','$rootScope'];

 // call a module from app.js and registering the controller
 //angular.module('shirishaProjectApp').controller('projectController',ProjectController);
 angular.module('ProjApp_Controllers').controller('projectController',ProjectController);


})(window.angular || (window.angular = {}));


