// Take note how you're going to include the [] as the second parameter. 
// This tells Angular that you want to create a new module rather than just use an 
// existing one. In all other files, we won't be using the [] 
// because we want to use the module which has already been set.

var app = angular.module('quoteBook', []);