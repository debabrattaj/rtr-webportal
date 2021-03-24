var routerApp = angular.module('routerApp', ['ui.router']);
  
  routerApp.config(function($stateProvider, $urlRouterProvider) {
      
      $urlRouterProvider.otherwise('/home');
      
      $stateProvider
          
          // HOME STATES AND NESTED VIEWS 
          .state('home', {
              url: '/home',
              templateUrl: 'partial-home.html'
          })
          .state('Link1', {
              url: '/Link1',
              templateUrl: 'Link1.html'
          })
          .state('Link2', {
            url: '/Link2',
            templateUrl: 'Link2.html'
        })
        .state('Link3', {
            url: '/Link3',
            templateUrl: 'Link3.html'
        })
        .state('Link4', {
            url: '/Link4',
            templateUrl: 'Link4.html'
        })
        .state('Link5', {
            url: '/Link5',
            templateUrl: 'Link5.html'
        })
        .state('Link6', {
            url: '/Link6',
            templateUrl: 'Link6.html'
        })
        .state('Link7', {
            url: '/Link7',
            templateUrl: 'Link7.html'
        })
        .state('Link8', {
            url: '/Link8',
            templateUrl: 'Link8.html'
        })
        .state('Link9', {
            url: '/Link9',
            templateUrl: 'Link9.html'
        })
          .state('contact-us', {
              url: '/contact-us',
              templateUrl: 'contact-us.html'
          })        
  });
  
