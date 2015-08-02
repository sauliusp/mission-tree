'use strict';

/**
 * @ngdoc function
 * @name missionTreeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the missionTreeApp
 */
angular.module('missionTreeApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
   	$scope.blocksInCol = _.range(10);
   	$scope.colCount = _.range(5);
  }]);
