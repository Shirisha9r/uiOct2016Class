// IIFE construct with angular object
(function(angular){
  'use strict';
  // configuring the app even before the apprun and app is initialised
  // there is an object $routeprovider inside the ngRoute and $routeprovider has a property called 'when'
  // we can assign a controller if we want to
  // when /home url is loaded this html is called and the controller will get executed
  function AppConfig($routeProvider){
     $routeProvider
      .when('/home',{
        templateUrl: '../templates/home.tpl.html',
        controller: 'homeController'
      })
      .when('/about',{
        templateUrl: '../templates/about.tpl.html',
        controller: 'projectController'
      })
      .otherwise('/home');
  }
  // inside the app config we inject the route provider
  AppConfig.$inject = ['$routeProvider'];

  // 1..callback function to be executed only once as soon as the app is initialized
  function AppRun($rootScope){
    $rootScope.user = {
      firstName: '',
      lastName: ''
    };

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
  AppRun.$inject = ['$rootScope'];

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
  angular.module('sprojectangsrvsApp', ['ngAnimate',
                                        'ngAria',
                                        'ngCookies',
                                        'ngMessages',
                                        'ngResource',
                                        'ngRoute',
                                        'ngSanitize',
                                        'ngTouch',
                                        'ProjApp_Controllers',
                                        'ProjApp_Services'
                                         ])


     // create the config function after injecting the ngRoute
    .config(AppConfig)
    // when app runs for the first time we have to execute a callback function
    //adding the $rootscope as one of the dependencies **** this approach is confusing
//    .run(['$rootScope',function($rootScope){}]);

    /*** second approach for run   ***/
    .run(AppRun);

    // write this in another file and name it as projectController.js and inject it in the app
//    .controller('projectController',ProjectController);

    //angular.module('shirishaprojectApp.controllers',[]);

  // create a custom module only for controllers
    angular.module('ProjApp_Controllers',[]);

    //create a custom module for services and inject it in the above 'sprojectangsrvsApp' main module of the application
    angular.module('ProjApp_Services',[]);






})(window.angular || (window.angular = {}));
