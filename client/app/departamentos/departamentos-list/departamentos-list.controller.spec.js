'use strict';

describe('Component: DepartamentosListComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var DepartamentosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    DepartamentosListComponent = $componentController('departamentos-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
