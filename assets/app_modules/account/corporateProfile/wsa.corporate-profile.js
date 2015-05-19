angular.module('wsa.corporateProfile', [])
	.controller('wsa_CorporateProfileController', ['$scope', 'wsa_GeolocationService', 'wsa_CurrentSessionService',
		function($scope, wsa_GeolocationService, wsa_CurrentSessionService) {
		
			$scope.model ={
				social : {}

			};

			$scope.$watch('model', function(){
				$scope.updateCurrentSession();
			}, true);

			$scope.getCity = function(val) {
				return wsa_GeolocationService.city(val).then(function(res){
			      	var addresses = [];
			      	angular.forEach(res.results, function(item){
			        	addresses.push(item.formatted_address);
			      	});
			      	return addresses;
			    });
			};

			$scope.getState = function(val) {
				return wsa_GeolocationService.state(val).then(function(res){
			      	var addresses = [];
			      	angular.forEach(res.results, function(item){
			        	addresses.push(item.formatted_address);
			      	});
			      	return addresses;
			    });
			};

			$scope.getCountry = function(val) {
				return wsa_GeolocationService.country(val).then(function(res){
			      	var addresses = [];
			      	angular.forEach(res.results, function(item){
			        	addresses.push(item.formatted_address);
			      	});
			      	return addresses;
			    });
			};
			
			$scope.saveData = function() {
				console.log($scope.model);
				alert(JSON.stringify($scope.model));
			};

			$scope.resetData = function() {
				$scope.model = {};
			};

			$scope.updateCurrentSession = function() {
				wsa_CurrentSessionService.updateCurrentSession($scope.model);
			};
	}])
