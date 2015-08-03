'use strict';

/**
 * @ngdoc directive
 * @name missionTreeApp.directive:missionBlock
 * @description
 * # missionBlock
 */
angular.module('missionTreeApp')
  .directive('missionBlock', [function () {
    return {
      restrict: 'E',
      replace:true,
      scope:{},
      templateUrl: 'views/mission-block.html'
      }
    }
  ]);
