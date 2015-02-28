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

appControllers.controller('AccordionController', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});