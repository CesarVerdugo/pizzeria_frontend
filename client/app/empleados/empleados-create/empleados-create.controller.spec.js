'use strict';

describe('Component: EmpleadosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var EmpleadosCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EmpleadosCreateComponent = $componentController('empleados-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
