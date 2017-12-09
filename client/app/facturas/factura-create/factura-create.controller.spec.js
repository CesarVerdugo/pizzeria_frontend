'use strict';

describe('Component: FacturaCreateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var FacturaCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    FacturaCreateComponent = $componentController('factura-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
