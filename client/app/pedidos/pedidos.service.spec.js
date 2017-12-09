'use strict';

describe('Service: pedidos', function () {

  // load the service's module
  beforeEach(module('pizzeriaApp'));

  // instantiate service
  var pedidos;
  beforeEach(inject(function (_pedidos_) {
    pedidos = _pedidos_;
  }));

  it('should do something', function () {
    expect(!!pedidos).to.be.true;
  });

});
