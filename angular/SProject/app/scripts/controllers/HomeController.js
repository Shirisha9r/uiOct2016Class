//IIFE
(function(angular){
  'use strict';
  // callback function for controller
  function HomeController($scope,$location){
      // initializing the username and password to be empty
    $scope.user ={
      'username': '',
      'password': ''
    };
      // here we are checking the condition
    $scope.loginUser = function(){
      if($scope.user.username === 'Shirisha' && $scope.user.password ==='Reddy'){
        console.log('Login was Successful');
        // loading the new url
        $location.path('/about');
      }

    };

  }
  //inject the dependencies
  HomeController.$inject = ['$scope','$location'];





  //call the ProjApp_Controllers module and define the controller
  angular.module('ProjApp_Controllers').controller('homeController',HomeController);





})(window.angular || (window.angular = {}));
