var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {

$scope.getQuotes = function(){
	$scope.list = dataService.getData();
};
//inject your service into your controller then add that data to the scope of the controller, then display it in the view
	var quote = {};//new empty object place holder
$scope.addQuotes = function() {
	quote.text = $scope.newQuote;//assigns newQuote to text field
	quote.author = $scope.newAuthor;//assigns newAuther to auther field
	dataService.addQuotes(quote);//pull the data in from the service and gives it a parameter called quote
	$scope.newQuote = '';//makes the field blank after function runs
	$scope.newAuthor = '';//makes the field blank after function runs
}

$scope.removeQuotes = function() {
	dataService.removeData($scope.deleteQuote);//deletes value from list
	$scope.deleteQuote = '';//makes the field blank after function runs
}

$scope.showAdd = function(){
	$scope.newquote = !$scope.newquote;
	$scope.spliceQuote = false;
	$scope.filter = false;
}

$scope.showRemove = function(){
	$scope.newquote = false;
	$scope.spliceQuote = !$scope.spliceQuote;
	$scope.filter = false;
}

$scope.showFilter = function(){
	$scope.newquote = false;
	$scope.spliceQuote = false;
	$scope.filter = !$scope.filter;
}

$scope.getQuotes();

});