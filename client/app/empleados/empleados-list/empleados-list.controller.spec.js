'use strict';

describe('Component: EmpleadosListComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var EmpleadosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EmpleadosListComponent = $componentController('empleados-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
