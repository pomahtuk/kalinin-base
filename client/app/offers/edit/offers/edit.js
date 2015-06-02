'use strict';

angular.module('kalininApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/offers/edit', {
        templateUrl: 'app/offers/edit/offers/edit.html',
        controller: 'OffersEditCtrl'
      });
  });
