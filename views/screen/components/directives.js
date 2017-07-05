angular.module('eccema.directives')
.directive('mainScreen', function(){
	return {
		restrict: 'E',
		controller: 'mainController',
		templateUrl: 'views/screen/components/main/view.html'
	}
})

.directive('menuScreen', function(){
	return {
		restrict: 'E',
		controller: 'menuController',
		templateUrl: 'views/screen/components/menu/view.html'
	}
})

.directive('consoleScreen', function(){
	return {
		restrict: 'E',
		controller: 'consoleController',
		templateUrl: 'views/screen/components/console/view.html'
	}
})

.directive('infoScreen', function(){
	return {
		restrict: 'E',
		controller: 'infoController',
		templateUrl: 'views/screen/components/info/view.html'
	}
})