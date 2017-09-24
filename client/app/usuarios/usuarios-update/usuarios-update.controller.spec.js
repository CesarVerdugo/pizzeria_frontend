'use strict';

describe('Component: UsuariosUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var UsuariosUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UsuariosUpdateComponent = $componentController('usuarios-update', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
