'use strict';

describe('Component: PedidosCreateComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var PedidosCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PedidosCreateComponent = $componentController('pedidos-create', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
