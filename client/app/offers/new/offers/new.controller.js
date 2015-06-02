'use strict';

angular.module('kalininApp')
  .controller('OffersNewCtrl', function ($scope, $http, $location) {
    $scope.offer = {};

    $scope.addOffer = function() {
      if (Object.keys($scope.offer).length === 0) {
        return true;
      }
      $http.post('/api/clients', $scope.offer);
      $scope.client = {};
      $location.path('/offers');
    };

    $scope.goBack = function () {
      $location.path('/offers');
    }
  });
