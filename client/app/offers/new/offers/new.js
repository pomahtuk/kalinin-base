'use strict';

angular.module('kalininApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/offers/new', {
        templateUrl: 'app/offers/new/offers/new.html',
        controller: 'OffersNewCtrl'
      });
  });
