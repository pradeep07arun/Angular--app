angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchname   = '';     // set the default search/filter term
  
  // create the list of sushi rolls 
  $scope.sushi = [
    { name: 'pradeep', type: 'awesome 1', marks: 100 },
    { name: 'Palani', type: 'awesome 2', marks: 100 },
    { name: 'gopi', type: 'awesome 3', marks: 100 },
    { name: 'praveen', type: 'awesome 4', marks: 100}
  ];
  
});