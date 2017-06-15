var app = angular.module('routeApp', ['ngRoute']);
console.log('hvdddn');

app.config(function($routeProvider){
  $routeProvider.when('/harry-potter', {
    templateUrl: 'views/partials/harry-potter.html',
    controller: 'DefaultController as dc'
  }).when('/indiana-jones', {
    templateUrl: 'views/partials/indiana-jones.html',
    controller: 'DefaultController as dc'
  }).when('/wolverine', {
    templateUrl: 'views/partials/wolverine.html',
    controller: 'DefaultController as dc'
  });
});

app.controller('DefaultController', DefaultController);

function DefaultController() {
console.log('DefaultController is loaded');

}
