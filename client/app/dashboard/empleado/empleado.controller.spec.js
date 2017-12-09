'use strict';

describe('Component: EmpleadoComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var EmpleadoComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EmpleadoComponent = $componentController('empleado', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
