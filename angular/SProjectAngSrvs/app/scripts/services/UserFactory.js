(function(angular){
  'use strict';
  //---- here we are using a factory type service and returning a function---
  //---this function is converted into class and we are returning an object----
  //callback for the factory service type
  // this function can also return the object or we can treat this function as class
  //as we prefer classes we are using here the function like a class
  function UserFactory(){
    // reference 'this' variable
    var self = this;

    self.user ={
      username: '',
      password: ''
    };
    //we are returning an object
    return self;
  }

  //inject the dependencies

  UserFactory.$inject = [];




  //call the ProjApp_services module and define the service "factory"
  angular.module('ProjApp_Services').factory('userFactory',UserFactory);

})(window.angular || (window.angular = {}));
