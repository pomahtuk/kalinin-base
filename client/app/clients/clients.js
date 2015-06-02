'use strict';

angular.module('kalininApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/clients', {
        templateUrl: 'app/clients/clients.html',
        controller: 'ClientsCtrl'
      });
  });
