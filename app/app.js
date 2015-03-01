'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ui.router',
  'myApp.version',
  'appControllers'
]);

myApp.run(
 [          '$rootScope', '$state', '$stateParams',
    
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    
    }
  ]
);

myApp.config(function($stateProvider, $urlRouterProvider){

  // for any unmatched url, redirect to /taskgroup/list
  $urlRouterProvider.otherwise('/view1');

  // now setup states
  $stateProvider
    .state('view1', {
    	url: "/view1",
    	templateUrl: "/app/views/view1.html",
    	controller: "View1Controller"    			
    })
    .state('view2', {
    	url: "/view2",
		templateUrl: "/app/views/view2.html",
    	controller: "View2Controller"  			
    })
    .state('accordion', {
   		url: "/accordion",
    	templateUrl: "/app/views/accordion.html",
    	controller: "AccordionController"  			
    })
});