'use strict';

describe('Component: SliderComponent', function () {

  // load the controller's module
  beforeEach(module('pizzeriaApp'));

  var SliderComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SliderComponent = $componentController('slider', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
