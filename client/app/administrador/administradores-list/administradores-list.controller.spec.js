'use strict';

describe('Component: AdministradoresListComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var AdministradoresListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AdministradoresListComponent = $componentController('administradores-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
