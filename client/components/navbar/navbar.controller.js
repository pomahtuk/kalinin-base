'use strict';

angular.module('kalininApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Главная',
      'link': '/'
    },{
      'title': 'Конкурсы',
      'link': '/offers',
      'restricted': true,
      'adminOnly': true
    },{
      'title': 'Заказчики',
      'link': '/clients',
      'restricted': true,
      'adminOnly': true
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isRestricted = function(item) {
      if (item.adminOnly) {
        return !$scope.isAdmin();
      } else if (item.restricted) {
        return !$scope.isLoggedIn();
      }
      return false;
    };

    $scope.isActive = function(route) {
      if (route === '/') {
        return $location.path() === route;
      } else {
        return $location.path().indexOf(route) > -1;
      }
    };
  });
