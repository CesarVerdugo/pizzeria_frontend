'use strict';

describe('Component: EmpleadosUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var EmpleadosUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EmpleadosUpdateComponent = $componentController('empleados-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
