'use strict';

angular.module('kalininApp')
  .controller('OffersNewCtrl', function ($scope, $http, $location) {
    $scope.offer = {};
    $scope.opened = {
      dateTime: false,
      dateTimeAuction: false
    };

    $scope.clients = [];

    //$http.get('/api/clients').then(function (response) {
    //  console.log(response);
    //  $scope.clients = response.data;
    //});

    $scope.refreshClients = function(query) {
      return $http.get(
        '/api/clients/search/' + query
      ).then(function(response) {
          $scope.clients = response.data
        });
    };

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
      $scope.offer.client = $scope.offer.client._id;
      //debugger;
      $http.post('/api/offers', $scope.offer);
      $scope.client = {};
      $location.path('/offers');
    };

    $scope.goBack = function () {
      $location.path('/offers');
    }
  });
