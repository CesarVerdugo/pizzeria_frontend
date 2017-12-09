'use strict';

describe('Service: clasesProductos', function () {

  // load the service's module
  beforeEach(module('pizzeriaApp'));

  // instantiate service
  var clasesProductos;
  beforeEach(inject(function (_clasesProductos_) {
    clasesProductos = _clasesProductos_;
  }));

  it('should do something', function () {
    expect(!!clasesProductos).to.be.true;
  });

});
