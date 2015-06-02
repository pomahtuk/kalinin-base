'use strict';

angular.module('kalininApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/clients/new', {
        templateUrl: 'app/clients/new/clients/new.html',
        controller: 'ClientsNewCtrl'
      });
  });
