'use strict';

angular.module('kalininApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Главная',
      'link': '/'
    },{
      'title': 'Конкурсы',
      'link': '/offers'
    },{
      'title': 'Заказчики',
      'link': '/clients'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      if (route === '/') {
        return $location.path() === route;
      } else {
        return $location.path().indexOf(route) > -1;
      }
    };
  });
