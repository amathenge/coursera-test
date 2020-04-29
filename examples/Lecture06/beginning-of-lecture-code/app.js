(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function() {
    var totalNameValue = calculateNForS($scope.name);
    $scope.totalValue = totalNameValue;
  };

  function calculateNForS(s) {
    var totalSValue = 0;
    for (var i=0; i < s.length; i++) {
      totalSValue += s.charCodeAt(i);
    }
    return totalSValue;
  };
});



})();
