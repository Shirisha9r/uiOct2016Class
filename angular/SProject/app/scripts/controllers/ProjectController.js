//IIFE Construct

(function(angular){
  'use strict';
  function ProjectController($scope){
    console.log($scope);
  }
  ProjectController.$inject = ['$scope'];

 // call a module from app.js
 //angular.module('shirishaProjectApp').controller('projectController',ProjectController);
 angular.module('ProjApp_Controllers').controller('projectController',ProjectController);


})(window.angular || (window.angular = {}));


