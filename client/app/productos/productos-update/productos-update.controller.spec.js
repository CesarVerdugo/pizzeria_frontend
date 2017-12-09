'use strict';

describe('Component: ProductosUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var ProductosUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ProductosUpdateComponent = $componentController('productos-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
