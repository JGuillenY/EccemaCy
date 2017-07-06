angular.module("eccemaCy", ['eccema.controllers', 'eccema.directives', 'ui-router'])
.config(($stateProvidare, $urlRouterProvider) => {
	$urlRouterProvider.otherwise('/screen');
	$stateProvider
		.state('screen', {
			name: 'screen',
			url: '/screen',
			controller: 'ecceController',
			templateUrl: "views/screen/view.html"
		})
		
})