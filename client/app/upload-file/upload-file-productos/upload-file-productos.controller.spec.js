'use strict';

describe('Component: UploadFileProductosComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var UploadFileProductosComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UploadFileProductosComponent = $componentController('upload-file-productos', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
