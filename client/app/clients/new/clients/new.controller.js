'use strict';

angular.module('kalininApp')
  .controller('ClientsNewCtrl', function ($scope, $http, $location, Auth) {
    $scope.client = {};

    $scope.addClient = function() {
      if (Auth.isAdmin()) {
        if (Object.keys($scope.client).length === 0) {
          return true;
        }
        $http.post('/api/clients', $scope.client);
        $scope.client = {};
        $location.path('/clients')
      } else {
        alert('У Вас недостаточно прав для совершения данной операции');
      }
    };

    $scope.goBack = function () {
      $location.path('/clients')
    }
  });
