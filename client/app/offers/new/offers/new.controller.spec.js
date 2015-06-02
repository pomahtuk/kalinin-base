'use strict';

describe('Controller: OffersNewCtrl', function () {

  // load the controller's module
  beforeEach(module('kalininApp'));

  var OffersNewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OffersNewCtrl = $controller('OffersNewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
