'use strict';

describe('Component: CiudadesListComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var CiudadesListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CiudadesListComponent = $componentController('ciudades-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
