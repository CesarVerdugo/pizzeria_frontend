'use strict';

describe('Component: FacturasUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var FacturasUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    FacturasUpdateComponent = $componentController('facturas-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
