angular.module('eccema.controllers')
.controller('consoleController', function($scope, $http){
	$scope.prePrompt =  '$' + $scope.name + '@' + $scope.ship_name +': > '
	$scope.console_input = ''

	$scope.console_enter = (key) => {
		if(key.keyCode == 13){
			console.log('preesed enter')
		}		
	}
})