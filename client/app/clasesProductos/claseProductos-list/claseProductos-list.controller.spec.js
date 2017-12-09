'use strict';

describe('Component: ClaseProductosListComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var ClaseProductosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ClaseProductosListComponent = $componentController('claseProductos-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
