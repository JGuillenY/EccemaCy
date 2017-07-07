angular.module('eccema.controllers')
.controller('eccemaController', function($scope, $http){
	$scope.main_screen = 'ship'
	var newDB = {
		name: 'GrayFox', 
		ship_name : 'Alpha34', 
		log : {
			navigation: [], 
			session: [
				'Welcome to EccemaCy Navigation System. Please confirm state of second Engine.', 
				'How can i help you today, GrayFox?']
		}, 
		components: {
			r_front : {state : 73}, 
			l_front : {state : 45}, 
			r_engine : {state : 23}, 
			l_engine : {state : 0}, 
			l_wing : {state : 84}, 
			r_wing : {state : 100}, }, 
		services: {
			explorer: {free : 1, total: 2}, 
			miner: {free : 1, total: 3}, 
			builder: {free : 2, total: 4}}, 
		credits: 1000, 
		battery: {current: 23,  max: 100}, 
		gas: {current : 323, max: 1000}}

	var currentDB = newDB
	
	//Creating All the references to $scope, so they can be referenced in the DOM
	$scope.battery = currentDB.battery
	$scope.gas = currentDB.gas
	$scope.name = currentDB.name
	$scope.ship_name = currentDB.ship_name
	$scope.logs = currentDB.log
	$scope.services = currentDB.services
	$scope.components = currentDB.components

})