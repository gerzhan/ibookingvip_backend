angular.module('wsa.vacationTrip', [])
	.controller('wsa_VacationTripController', ['$scope', 'wsa_GeolocationService', 'wsa_CurrentSessionService',
		function($scope, wsa_GeolocationService, wsa_CurrentSessionService) {
		
			$scope.model ={};

			var parseDate = function(data){
				var unix = new Date(data).getTime();
				return moment(unix).format("YYYY-MM-DD");
			};

			/* Запись свойств из currentSession в текущий $scope.model */
			$scope.currentSession = wsa_CurrentSessionService.getCurrentSession();
			angular.forEach($scope.currentSession, function(item, key){
				$scope.model[key] = item;
			});

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
