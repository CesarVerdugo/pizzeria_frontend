'use strict';

describe('Component: AdministradoresUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var AdministradoresUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AdministradoresUpdateComponent = $componentController('administradores-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
