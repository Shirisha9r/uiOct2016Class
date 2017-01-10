//IIFE
(function(angular){
  'use strict';
  // callback function for controller
  function HomeController($scope,$location,userFactory){
  // as the $scope is connected to the controller  and not the service ( userfactory)
   //will have the empty values.. so we have to pass the values to the service by $scope.user = userFactory.user
    $scope.user = userFactory.user;


      // here we are checking the condition
    $scope.loginUser = function(){
      if(userFactory.user.username === 'Shirisha' && userFactory.user.password ==='Reddy'){
        console.log('Login was Successful');
        // loading the new url
        $location.path('/about');
      }

    };

  }
  //inject the dependencies
  HomeController.$inject = ['$scope','$location','userFactory'];





  //call the ProjApp_Services module and define the controller
  angular.module('ProjApp_Controllers').controller('homeController',HomeController);





})(window.angular || (window.angular = {}));
