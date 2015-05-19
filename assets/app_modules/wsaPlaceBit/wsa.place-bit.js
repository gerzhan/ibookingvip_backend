angular.module('wsa.placeBit', ['wsa.Common', 'ngDialog'])

	.controller('wsa_PlaceBitController', ['$scope', '$rootScope', '$state', 'wsa_GeolocationService', 'ngDialog',
		function( $scope, $rootScope, $state, wsa_GeolocationService, ngDialog) {


			$scope.onPlaceBit = function() {

				ngDialog.openConfirm({
	      			template: 'app/views/ngdialog-template.html'
	    		}).then(function (value) {

	    		}, function (reason) {
	      			if(reason) { 
		      			if (navigator.geolocation) {
					        navigator.geolocation.getCurrentPosition(function(position){
			                	wsa_GeolocationService.setPosition(position.coords);
					        });
					    } else {
					        console.log("Geolocation is not supported by this browser.");
					    }
					}
	    		});
			}	

			$scope.onPlaceBit();
	}])

