'use strict';

angular.module('kalininApp')
  .controller('OffersCtrl', function ($scope, $http, $location, socket, Auth) {

    $scope.gridOptions = {
      enableSorting: true,
      columnDefs: [
        {
          // do not edit
          // make a lonk
          name: 'client',
          displayName:'Заказчик',
          field: 'client',
          type: 'string',
          width: 250,
          enableCellEdit: false
        }, {
          name: 'title',
          displayName:'Наименование работ',
          field: 'title',
          type: 'string',
          width: 200
        }, {
          name: 'startSum',
          displayName:'Стартовая сумма',
          field: 'startSum',
          type: 'number',
          width: 160
        }, {
          name: 'orderProof',
          displayName:'Обеспечение заявки',
          field: 'orderProof',
          type: 'number',
          width: 180
        }, {
          name: 'contractProof',
          displayName:'Обеспечение контракта',
          field: 'contractProof',
          type: 'number',
          width: 200
        }, {
          name: 'link',
          displayName:'Ссылка на конкурс',
          field: 'link',
          type: 'string',
          width: 170
        }, {
          name: 'dateTime',
          displayName: 'Дата и время окончания приема заявок',
          field: 'dateTime',
          type: 'string',
          width: 240
        }, {
          name: 'dateTimeAuction',
          displayName:'Дата и время аукциона',
          field: 'dateTimeAuction',
          type: 'string',
          width: 200
        }, {
          name: 'resultSum',
          displayName:'Итоговая сумма',
          field: 'resultSum',
          type: 'string',
          width: 160
        }, {
          name: 'winner',
          displayName:'Компания победитель',
          field: 'winner',
          type: 'string',
          width: 240
        }
      ],
      data: []
    };

    $scope.isAdmin = Auth.isAdmin;

    $scope.gridOptions.onRegisterApi = function(gridApi) {
      $scope.gridApi = gridApi;
      $scope.gridApi.grid.registerRowsProcessor( $scope.singleFilter, 200 );

      gridApi.edit.on.afterCellEdit($scope, function(rowEntity) {
        if (Auth.isAdmin()) {
          $http.put('/api/offers/' + rowEntity._id, rowEntity).then(function() {
            console.log('updated');
          });
        }
      });
    };

    $scope.filterFunc = function() {
      $scope.gridApi.grid.refresh();
    };

    $scope.filter = {
      value: ''
    };

    $scope.singleFilter = function (renderableRows) {
      var matcher = new RegExp($scope.filter.value, 'ig');
      renderableRows.forEach( function( row ) {
        var entity = row.entity;
        var match = false;

        Object.keys(entity).forEach(function (key) {
          var field = String(entity[key]);
          if (field.match(matcher)) {
            match = true;
          }
        });

        if ( !match ){
          row.visible = false;
        }
      });
      return renderableRows;
    };

    if (Auth.isAdmin()) {
      $http.get('/api/offers').then(function (serverResponse) {
        $scope.gridOptions.data = serverResponse.data;
        socket.syncUpdates('offers', $scope.gridOptions.data);
      });
    }

    $scope.addNewOffer = function () {
      $location.path('/offers/new');
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('offers');
    });

  });
