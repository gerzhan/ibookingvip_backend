angular.module('wsa.gallery', [])
	.controller('wsa_GalleryController', ['$scope', 'wsa_GeolocationService', 'wsa_CurrentSessionService',
		function($scope, wsa_GeolocationService, wsa_CurrentSessionService) {

			$scope.model ={};

			$scope.$watch('model', function(){
				$scope.updateCurrentSession();
			}, true);

			$scope.sendInquiry = function() {
				console.log($scope.model);
				alert(JSON.stringify($scope.model));
			};

			$scope.updateCurrentSession = function() {
				wsa_CurrentSessionService.updateCurrentSession($scope.model);
			};
	}])
