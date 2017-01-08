// IIFE construct with angular object
    /***  once we source the angular JS file in the index.html file, in the DOM
    the angular object is available (window.angular is available for me)
    **** if window.angular does not exist then window.angular = {} empty object
    *** this will avoid the big list of errors  and when these will be gone
       it means angular is connected to the html            ****/
// IIFE construct with angular object
(function(angular){
  'use strict';


  // 1..callback function to be executed only once as soon as the app is initialized
  function AppRun(){

  }
  /**** injecting the dependency and this is different from the below dependency.
  this is required when executing the callback function
  $rootScope is the scope variable which is globalscope varaible for our
  ng-app or angular application  its life starts at the body START tag AND ends at the end tag
  when $rootScope is assigned to the ng-app then angular treats the $rootscope as the VIEWMODEL
  ANGULAR WILL ONLY ACCCESS ANYTHING IN HTML ONLY THROUGH THE ROOTSCOPE
  rootscope is the parent of all scopes***Try avoiding if we can*** only use in the below scenario
  ** eg: *** RootScope holds the user info..*As soon as my app loads, need to make an API call to
             load the user information..whatever response I get from the server, I have to put to
             the $rootScope(always holds the user information)
  ****/
  AppRun.$inject = [];

  // 2...callback for the controller...remove this and write in a seperate Projectcontroller.js
//  function ProjectController($scope){
//    console.log($scope);
//    console.log($scope.$parent);
//  }
//    // $scope is a dependency and we have to inject it
//  ProjectController.$inject = ['$scope'];

  /***  to define the main module of the application and include the dependencies
        in an array and these are needed for my module to run
        This is the bootstrapping the app via the module****/
  angular.module('sprojectApp', ['ngAnimate',
                                        'ngAria',
                                        'ngCookies',
                                        'ngMessages',
                                        'ngResource',
                                        'ngRoute',
                                        'ngSanitize',
                                        'ngTouch',
                                        'ProjApp_Controllers'
                                         ]);
// create a custom module
  angular.module('ProjApp_Controllers',[]);
     //actual configuration of my application **** remove this
//    .config()
    // when app runs for the first time we have to execute a callback function
    //adding the $rootscope as one of the dependencies **** this approach is confusing
//    .run(['$rootScope',function($rootScope){}]);

    /*** second approach for run   ***/
//    .run(AppRun);

    // write this in another file and name it as projectController.js and inject it in the app
//    .controller('projectController',ProjectController);

    //angular.module('shirishaprojectApp.controllers',[]);








})(window.angular || (window.angular = {}));
