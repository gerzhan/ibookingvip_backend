angular.module('wsa.privateJet', ['wsa.Common'])
	.controller('wsa_PrivateJetController', ['$scope', 'wsa_GeolocationService', 'wsa_CurrentSessionService',
		function($scope, wsa_GeolocationService, wsa_CurrentSessionService) {
			/* TODO запульнуть в way объект с нужным местом отправления */
			$scope.model = {
				pointCount : 1,
				way : [{}, {}, {}]
			};

			/* Запись свойств из currentSession в текущий $scope.model */
			$scope.currentSession = wsa_CurrentSessionService.getCurrentSession();
			angular.forEach($scope.currentSession, function(item, key){
				$scope.model[key] = item;
			});

			$scope.getAirports = function(val) {
				return wsa_GeolocationService.airport(val).then(function(res){
			      	var addresses = [];
			      	angular.forEach(res.results, function(item){
			        	addresses.push(item.formatted_address);
			      	});
			      	return addresses;
			    });
			}

			/* преобразование даты в формат 2015-04-25 */
			var parseDate = function(data){
				var unix = new Date(data).getTime();
				return moment(unix).format("YYYY-MM-DD");
			};

			/* Динамическая запись данных при заполнении полей формы */
			$scope.$watch('model', function(){
				$scope.updateCurrentSession($scope.model);
			}, true);

			/* Обработка данных перед отправкой */
			$scope.sendInquiry = function() {
				
				angular.forEach($scope.model.way, function(item){
					item.date = parseDate(item.date);
				});

				console.log($scope.model);
				alert(JSON.stringify($scope.model));

			};

			$scope.updateCurrentSession = function() {
				wsa_CurrentSessionService.updateCurrentSession($scope.model);
			};

	}])
	.filter('range', function() {
  		return function(input, total) {
    		total = parseInt(total);
    		for (var i=0; i<total; i++)
     			input.push(i);
    		return input;
  		};
	});

