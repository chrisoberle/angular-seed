var appControllers = angular.module('appControllers',[]);

appControllers.controller('View1Controller', ['$scope', '$location',
	function($scope, $location){
		console.log('View1Controller');
	}
]);

appControllers.controller('View2Controller', ['$scope', '$location',
	function($scope, $location){
		console.log('View2Controller');
	}
]);