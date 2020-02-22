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

  $scope.addPerson = function() {
    var newPerson = {
      name: $scope.newPerson.name,
      age: parseInt($scope.newPerson.age),
      favoriteColor: $scope.newPerson.favoriteColor,
      available: true,
      thumb: "../assets/img/user_avatar.png"
    }

    // we push the new object to the array
    $scope.people.push(newPerson);

    // we have to reset the data so the values can be empty again once you submit
    $scope.newPerson.name = "";
    $scope.newPerson.age = "";
    $scope.newPerson.favoriteColor = "";

  }

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
      available: true,
      thumb: "../assets/img/user_avatar.png"
    },
    {
      name: "Sam",
      age: 2,
      favoriteColor: "red",  
      available: false,
      thumb: "../assets/img/user_avatar.png"     
    },
    {      
      name: "Jessy",
      age: 42,
      favoriteColor: "purple",
      available: true,
      thumb: "../assets/img/user_avatar.png"
    },
    {      
      name: "Sally",
      age: 37,
      favoriteColor: "pink",
      available: false,
      thumb: "../assets/img/user_avatar.png"
    }
  ]
        
}]);