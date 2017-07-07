angular.module("eccemaCy", ['eccema.controllers', 'eccema.directives', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/screen');
	$stateProvider
		.state('screen', {
			name: 'screen',
			url: '/screen',
			controller: 'eccemaController',
			templateUrl: "views/screen/view.html"
		})

})