'use strict';

describe('Component: ProductosListComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var ProductosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ProductosListComponent = $componentController('productos-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
