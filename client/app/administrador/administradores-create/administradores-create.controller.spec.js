'use strict';

describe('Component: AdministradoresCreateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var AdministradoresCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AdministradoresCreateComponent = $componentController('administradores-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
