var app = angular.module('cruiseApp', []);


app.controller('mainController', function($scope, $http){

$scope.count = 3;
// init data
$http.get('/cruises?offset=1&count=3')
    .success(function(data){
        $scope.destinations = data;  
});

$scope.furtherDetails = false;

$scope.showMore = function(){

$scope.count = $scope.count + 3;


var pagString = '/cruises?offset=1&count='+String($scope.count);

$http.get(pagString)
    .success(function(data){
        $scope.destinations = data;  
});

}




});