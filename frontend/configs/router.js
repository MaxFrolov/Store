'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'assets/components/main/main.html'
      })
      .state('app', {
        abstract: true,
        controller: 'AppCtrl',
        templateUrl: 'components/app/app.html'
      })
      .state('app.posts', {
        url: '/posts',
        controller: 'PostsCtrl',
        templateUrl: 'components/posts/index.html'
      });

    $urlRouterProvider.otherwise('/');

  });
