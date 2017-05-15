console.log('client');

// bring in Angular with myApp
var myApp = angular.module('myApp', []);

// set up a controller
myApp.controller('MovieSearch', function($http){
  // variable global to this controller
  var vm = this;
  vm.movieArray = [];

vm.getMovies = function(){
  return $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?s=' + 'ms'
  }).then(function success(response){
  console.log('this is the response', response);
  vm.movieArray = response.data;
  console.log('in vm response ->', response.data);
  // return vm.movieArray = response.data.Search;
});
}; // end getMovies function
}); // end controller
