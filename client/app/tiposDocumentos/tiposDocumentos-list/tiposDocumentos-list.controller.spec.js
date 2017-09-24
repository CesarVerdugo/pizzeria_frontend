'use strict';

describe('Component: TiposDocumentosListComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var TiposDocumentosListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TiposDocumentosListComponent = $componentController('tiposDocumentos-list', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
