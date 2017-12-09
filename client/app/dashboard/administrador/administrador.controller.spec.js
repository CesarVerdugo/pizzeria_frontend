'use strict';

describe('Component: AdministradorComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var AdministradorComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AdministradorComponent = $componentController('administrador', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
