'use strict';

describe('Service: Webcam', function () {

  // load the service's module
  beforeEach(module('pizzeriaApp'));

  // instantiate service
  var Webcam;
  beforeEach(inject(function (_Webcam_) {
    Webcam = _Webcam_;
  }));

  it('should do something', function () {
    expect(!!Webcam).to.be.true;
  });

});
