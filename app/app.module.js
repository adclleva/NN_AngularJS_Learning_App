// the empty array is for dependencies
var myApp = angular.module('App', []); // the variable and the parameter inside the module does not have to be the same
// the html is now being controlled by this module

// this function will trigger before the application funs
// myApp.config(function() {

// });

// this function will trigger when it runs
// myApp.run(function() {

// });
// this is will the dependencies and the function when you wrap the second parameter as an array
// because sometime we might have multiple controllers with the same name of scopes
// this sets the initial state
myApp.controller('AppController',['$scope', function($scope) {
  $scope.message ="Hi";
  $scope.ninjas = ['don', 'mike', 'leo'];

  $scope.removePerson = function(name){
    // remember the es5 rules for the array methods
    var newPeople =  $scope.people.filter(function(person) {
  
      return name !== person.name;
    });
    $scope.people = newPeople;
  };

  $scope.people = [
    {
      name: "Bob",
      age: 23,
      favoriteColor: "blue",
      available: true
    },
    {
      name: "Sam",
      age: 2,
      favoriteColor: "red",  
      available: false     
    },
    {      
      name: "Jessy",
      age: 42,
      favoriteColor: "purple",
      
      available: true
    },
    {      
      name: "Sally",
      age: 37,
      favoriteColor: "pink",
      available: false
      
    }
  ]
        
}]);