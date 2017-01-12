(function(angular){
  'use strict';
  //---- here we are using a service type service --
  //-------
  //callback for the  service type
  // this function can also return the object if it had to behave like a factory service
  //LogintService is a class and performLogin is a property
  function LogintService(userFactory,$location){
    // reference 'this' variable
    var self = this;
    // function to check the username and password
    self.performLogin = function(){

      if(userFactory.user.username === 'Shirisha' && userFactory.user.password ==='Reddy'){
        console.log('Login was Successful');
        // loading the new url
        $location.path('/about');
      }
    };
    // logic to check if the username and password fields are not empty
    self.checkLogin = function($scope){
      if($scope.user.username === '' && $scope.user.password === ''){
      $location.path('/home');
      }
    };

  }

  LogintService.$inject = ['userFactory','$location'];




  //call the ProjApp_services module and define the service "factory"
  angular.module('ProjApp_Services').service('LogintService',LogintService);

})(window.angular || (window.angular = {}));
