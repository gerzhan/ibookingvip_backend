angular.module('wsa.automobile', [])
	.controller('wsa_AutomobileController', ['$scope', 'wsa_GeolocationService', 'wsa_CurrentSessionService',
		function($scope, wsa_GeolocationService, wsa_CurrentSessionService) {

			var parseDate = function(data){
				var unix = new Date(data).getTime();
				return moment(unix).format("YYYY-MM-DD");
			};

			$scope.getCity = function(val) {
				return wsa_GeolocationService.city(val).then(function(res){
			      	var addresses = [];
			      	angular.forEach(res.results, function(item){
			        	addresses.push(item.formatted_address);
			      	});
			      	return addresses;
			    });
			};

			$scope.model ={
				dataStart : {
					time: '12:00'
				},
				dataEnd : {
					time: '12:00'
				},
				make : 'anyMake',
				model : 'anyModel',
				dropOff : 'same'
			};

			/* Р—Р°РїРёСЃСЊ СЃРІРѕР№СЃС‚РІ РёР· currentSession РІ С‚РµРєСѓС‰РёР№ $scope.model */
			$scope.currentSession = wsa_CurrentSessionService.getCurrentSession();
			angular.forEach($scope.currentSession, function(item, key){
				$scope.model[key] = item;
			});

			$scope.$watch('model', function(){
				$scope.updateCurrentSession($scope.model);
			}, true);

			$scope.sendInquiry = function() {

				$scope.model.dataStart.data = parseDate($scope.model.dataStart.data);
				$scope.model.dataEnd.data = parseDate($scope.model.dataEnd.data);
				console.log($scope.model);
				alert(JSON.stringify($scope.model));
			};

			$scope.updateCurrentSession = function() {
				wsa_CurrentSessionService.updateCurrentSession($scope.model);
			};
	}])
