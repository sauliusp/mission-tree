'use strict';

describe('Directive: missionBlock', function () {

  // load the directive's module
  beforeEach(module('missionTreeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mission-block></mission-block>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the missionBlock directive');
  }));
});
