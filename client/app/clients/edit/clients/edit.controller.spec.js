'use strict';

describe('Controller: ClientsEditCtrl', function () {

  // load the controller's module
  beforeEach(module('kalininApp'));

  var ClientsEditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientsEditCtrl = $controller('ClientsEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
