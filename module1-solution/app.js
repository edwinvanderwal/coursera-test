(function () {
  'use strict';

  angular.module('lunchApp', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
    $scope.lunchItems = "";
    $scope.feedback = "";


  $scope.showFeedback = function() {
    console.log($scope.lunchItems);
    var items = $scope.lunchItems;
    if (items) {
      if (items.split(',').length > 3) {
        $scope.feedback = "Too much!";
      } else {
        $scope.feedback = "Enjoy!";
      }
    } else {
      $scope.feedback = "Please enter data first";
    }
  }
}

})();
