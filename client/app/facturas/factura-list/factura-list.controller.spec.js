'use strict';

describe('Component: FacturaListComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var FacturaListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    FacturaListComponent = $componentController('factura-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
