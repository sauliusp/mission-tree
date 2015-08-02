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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
