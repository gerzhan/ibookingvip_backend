angular.module('wsa.dealsPromotions', [])
	.controller('wsa_DealsPromotionsController', ['$scope', 'wsa_GeolocationService', 'wsa_CurrentSessionService',
		function($scope, wsa_GeolocationService, wsa_CurrentSessionService) {

			$scope.model ={};

			var parseDate = function(data){
				var unix = new Date(data).getTime();
				return moment(unix).format("YYYY-MM-DD");
			};

			$scope.$watch('model', function(){
				$scope.updateCurrentSession($scope.model);
			}, true);


			$scope.saveData = function() {
				if( $scope.model.dataStart.data && $scope.model.dataEnd.data) {
					$scope.model.dataStart.data = parseDate($scope.model.dataStart.data);
					$scope.model.dataEnd.data = parseDate($scope.model.dataEnd.data);
				}
				console.log($scope.model);
			};

			$scope.resetData = function() {
				$scope.model = {};
			};

			$scope.addPromotions = function() {

			};

			$scope.updateCurrentSession = function() {
				wsa_CurrentSessionService.updateCurrentSession($scope.model);
			};
	}])

