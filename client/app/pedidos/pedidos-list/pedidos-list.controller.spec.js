'use strict';

describe('Component: PedidosListComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var PedidosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PedidosListComponent = $componentController('pedidos-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
