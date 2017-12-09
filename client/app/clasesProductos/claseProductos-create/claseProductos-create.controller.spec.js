'use strict';

describe('Component: ClaseProductosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var ClaseProductosCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ClaseProductosCreateComponent = $componentController('claseProductos-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
