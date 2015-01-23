// Once again note we're 'getting' the quoteBook module rather than 'setting' ([]) it.
//connects this page to the app.js page
var app = angular.module('quoteBook');

$scope.list = dataService();//gets data from dataService.js