'use strict';

angular.module('kalininApp')
  .controller('ClientsCtrl', function ($scope, $http, $location, socket, Auth) {

    $scope.gridOptions = {
      enableSorting: true,
      columnDefs: [
        { name: 'name', displayName:'Название', field: 'name', type: 'string', enableCellEdit: true },
        { name: 'inn', displayName:'ИНН', field: 'inn', type: 'number', enableCellEdit: true  },
        { name: 'address', displayName:'Адрес', field: 'address', type: 'string', enableCellEdit: true },
        { name: 'phone', displayName:'Телефон', field: 'phone', type: 'string', enableCellEdit: true },
        { name: 'fio', displayName:'ФИО', field: 'fio', type: 'string', enableCellEdit: true }
      ],
      data: []
    };

    $scope.isAdmin = Auth.isAdmin;

    $scope.gridOptions.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
      gridApi.edit.on.afterCellEdit($scope, function(rowEntity) {
        if (Auth.isAdmin()) {
          $http.put('/api/clients/' + rowEntity._id, rowEntity).then(function() {
            console.log('updated');
          });
        }
      });
    };

    if (Auth.isAdmin()) {
      $http.get('/api/clients').then(function (serverResponse) {
        $scope.gridOptions.data = serverResponse.data;
        socket.syncUpdates('clients', $scope.gridOptions.data);
      });
    }

    $scope.addNewClient = function () {
      $location.path('/clients/new');
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('clients');
    });

  });
