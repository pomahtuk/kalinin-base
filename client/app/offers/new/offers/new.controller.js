'use strict';

angular.module('kalininApp')
  .controller('OffersNewCtrl', function ($scope, $http, $location) {
    $scope.offer = {};
    $scope.opened = {
      dateTime: false,
      dateTimeAuction: false
    }

    $scope.open = function($event, type) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened[type] = true;
    };

    $scope.dateOptions = {
      startingDay: 1
    };

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
