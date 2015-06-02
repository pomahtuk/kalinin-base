'use strict';

describe('Controller: ClientsNewCtrl', function () {

  // load the controller's module
  beforeEach(module('kalininApp'));

  var ClientsNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientsNewCtrl = $controller('ClientsNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
