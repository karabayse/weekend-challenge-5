console.log('client');

// bring in Angular with myApp
var myApp = angular.module('myApp', []);

// set up a controller
myApp.controller('MovieSearch', function($http){
  // variable global to this controller
  var vm = this;
  vm.movieArray = [];

vm.getMovies = function(title, year, poster){
  console.log('in getMovies ng-click');
  var objectToSend = {
    title: vm.title,
    year: vm.year,
    poster: vm.poster
  }; // end objectToSend
  console.log('adding objectToSend ->', objectToSend);
  $http({
    method: 'GET',
    url: 'http://www.omdbapi.com/?s=' + vm.title
  }).then(function success(response){
  console.log('this is the response', response);
  vm.movieArray = response.data.Search;
  console.log('in vm response ->', response.data);
  console.log(vm.movieArray);
});
}; // end getMovies function
}); // end controller
