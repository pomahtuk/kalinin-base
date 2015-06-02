'use strict';

angular.module('kalininApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/offers', {
        templateUrl: 'app/offers/offers.html',
        controller: 'OffersCtrl'
      });
  });
