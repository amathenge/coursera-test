(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Mathenge";
  $scope.moreData = "This is more data";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
