// the empty array is for dependencies
// when routing,we need to add in the routing dependency inside our module
var myApp = angular.module('myApp', ['ngRoute']); // the variable and the parameter inside the module does not have to be the same
// the html is now being controlled by this module

// this function will trigger before the application funs
myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      // ! when using templateURL, it's important that you start from the root directory when calling it
      // ! because it is usually for external template file
      templateUrl: './app/components/home/homeView.html',
      controller: 'AppController'
    })
    .when('/list', {
      templateUrl: './app/components/list/listView.html',
      // this controller is what is used to controler the listView
      controller: 'AppController'
    })
    .when('/experimental', {
      templateUrl: './app/components/experimental/experimentalView.html',
      controller: 'AppController'
    })
    .otherwise({
      redirectTo: '/home'
    });

}]);

// this is to create a custom directive, and we use camelCase in the js file while it'll be a snake case in the html
myApp.directive('randomPerson',['$http', function($http) {  // this object that the directive is return is what will control everything
  return {
    restrict: 'E',
    // this directive has it's own scope
    scope: {
      // the equal sign means that it'll bind it
      people: '=',
      title: '=',
      length: '='
    },

    // we can use this to show the view
  

    templateUrl: 'app/components/random/random.html',

    // this scope is refering to the scope of this directive
    // we can also make the controller be 'AppController' or any other controller
    controller: function($scope) {
      $http.get('assets/data/people.json')
      .then(function successCallback(response) {
        var people = response.data;
        var size = response.data.length;
        var randomIndex = Math.floor(Math.random() * size);
        $scope.randomPerson =  people[randomIndex];

        console.log($scope.randomPerson, "what");
        }, function errorCallback(response) {
          console.log("Status:",response.statusText);
        });
    }
    // you can make your controller like this
  };
}])

// this function will trigger when it runs
// myApp.run(function() {

// });

// this is will the dependencies and the function when you wrap the second parameter as an array
// because sometime we might have multiple controllers with the same name of scopes
// this sets the initial state
myApp.controller('AppController',['$scope', '$http', function($scope, $http) {
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
  
  // this is how to get data from an api
  // recall that this is an asynchonous function
  $http.get('assets/data/people.json')
  .then(function successCallback(response) {
    
    $scope.people = response.data;
    $scope.length = $scope.people.length;
    $scope.randomPersonIndex = Math.floor(Math.random() * $scope.people.length);
    $scope.randomPerson = $scope.people[$scope.randomPersonIndex];

    console.log("Status:", response.statusText)
    }, function errorCallback(response) {
      console.log("Status:",response.statusText);
    });


  // we wont be using this anymore because we'll be making a http request to get the data
  // $scope.people = [
  //   {
  //     name: "Bob",
  //     age: 23,
  //     favoriteColor: "blue",
  //     available: true,
  //     thumb: "../assets/img/user_avatar.png"
  //   },
  //   {
  //     name: "Sam",
  //     age: 2,
  //     favoriteColor: "red",  
  //     available: false,
  //     thumb: "../assets/img/user_avatar.png"     
  //   },
  //   {      
  //     name: "Jessy",
  //     age: 42,
  //     favoriteColor: "purple",
  //     available: true,
  //     thumb: "../assets/img/user_avatar.png"
  //   },
  //   {      
  //     name: "Sally",
  //     age: 37,
  //     favoriteColor: "pink",
  //     available: false,
  //     thumb: "../assets/img/user_avatar.png"
  //   }
  // ]
  // Json stands for javascript object notation
  // remember that with json the keys and values are strings
  // console.log(angular.toJson($scope.people));
        
}]);