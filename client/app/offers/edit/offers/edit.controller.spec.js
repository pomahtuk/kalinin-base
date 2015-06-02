'use strict';

describe('Controller: OffersEditCtrl', function () {

  // load the controller's module
  beforeEach(module('kalininApp'));

  var OffersEditCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OffersEditCtrl = $controller('OffersEditCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
