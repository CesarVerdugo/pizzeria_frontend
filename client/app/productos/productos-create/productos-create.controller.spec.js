'use strict';

describe('Component: ProductosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var ProductosCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ProductosCreateComponent = $componentController('productos-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
