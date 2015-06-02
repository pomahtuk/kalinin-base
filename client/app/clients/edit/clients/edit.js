'use strict';

angular.module('kalininApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/clients/edit', {
        templateUrl: 'app/clients/edit/clients/edit.html',
        controller: 'ClientsEditCtrl'
      });
  });
