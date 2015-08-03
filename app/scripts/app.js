'use strict';

/**
 * @ngdoc overview
 * @name missionTreeApp
 * @description
 * # missionTreeApp
 *
 * Main module of the application.
 */
angular
  .module('missionTreeApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/missions.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/blocks', {
        templateUrl: 'views/mission-blocks.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
