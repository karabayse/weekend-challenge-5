console.log('client');

// bring in Angular with myApp
var myApp = angular.module('myApp', []);

// set up a controller
myApp.controller('MovieSearch', function($http){
  // variable global to this controller
  var vm = this;
  vm.movieArray = [];

// function to get movies
vm.getMovies = function(){
  $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?s=' + vm.title
  }).then(function success(response){
  console.log('this is the response', response);
  vm.movieArray = response.data.Search;
  console.log('in vm response ->', response.data);
  // return vm.movieArray = response.data.Search;
});
}; // end getMovies function

// function to add movies as favorites
vm.addAsFavorite = function(movie){
  console.log(vm.movieArray);
  $http({
    method: 'POST',
    url: '/favoritemovies',
    data: movie
  }).then(function(response){
    console.log(response);
    getMovies();
  });
}; // end addAsFavorite function
}); // end controller
