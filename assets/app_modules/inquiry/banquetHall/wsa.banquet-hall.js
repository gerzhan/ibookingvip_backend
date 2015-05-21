angular.module('wsa.banquetHall', [])
	.controller('wsa_BanquetHallController', ['$scope', 'wsa_GeolocationService', 'wsa_CurrentSessionService',
		function($scope, wsa_GeolocationService, wsa_CurrentSessionService) {

			$scope.model ={
				capacity : '50',
				music : 'enterainmentSoundSystem',
				parking : 'true',
				priceRange : 'anyPriceRange'

			};

			/* Р—Р°РїРёСЃСЊ СЃРІРѕР№СЃС‚РІ РёР· currentSession РІ С‚РµРєСѓС‰РёР№ $scope.model */
			$scope.currentSession = wsa_CurrentSessionService.getCurrentSession();
			angular.forEach($scope.currentSession, function(item, key){
				$scope.model[key] = item;
			});

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

			var parseDate = function(data){
				var unix = new Date(data).getTime();
				return moment(unix).format("YYYY-MM-DD");
			};

			$scope.$watch('model', function(){
				$scope.updateCurrentSession($scope.model);
			}, true);

			$scope.sendInquiry = function() {
				$scope.model.checkIn = parseDate($scope.model.checkIn);
				$scope.model.checkOut = parseDate($scope.model.checkOut);
				console.log($scope.model);
				alert(JSON.stringify($scope.model));

			};

			$scope.updateCurrentSession = function() {
				wsa_CurrentSessionService.updateCurrentSession($scope.model);
			};
	}])
