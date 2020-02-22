// the empty array is for dependencies
var myApp = angular.module('App', []); // the variable and the parameter inside the module does not have to be the same
// the html is now being controlled by this module

// this function will trigger before the application funs
// myApp.config(function() {

// });

// this function will trigger when it runs
// myApp.run(function() {

// });

myApp.controller('AppController', function($scope) {
  $scope.message ="HI";
})