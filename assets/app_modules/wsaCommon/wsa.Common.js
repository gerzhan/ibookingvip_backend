angular.module('wsa.Common', [])
	.run(function(){
	})
	.service('wsa_GeolocationService', ['$resource', '$http', '$q', '$timeout', function($resource, $http, $q, $timeout){

		var _position = {};
		var _destination = {};

		//https://developers.google.com/maps/documentation/geocoding/?csw=1#Geocoding РґРѕРєРё РіРµРѕРєРѕРґРёСЂРѕРІР°РЅРёРµ
		var _resource =  $resource('//maps.googleapis.com/maps/api/geocode/json', {},
		{
        	airport: {
        		method: 'GET',
        	},
        	city: {
        		method: 'GET'
        	},
        	state: {
        		method: 'GET'
        	},
        	country: {
        		method: 'GET'
        	}
      	});


		return {

			getPosition : function() {
				return _position;
			},

			setPosition : function( newPosition) {
				_position = newPosition;
			},

			getDestination : function() {
				return _destination;
			},

			setDestination : function( newDestination) {
				_destination = newDestination;
			},

			airport : function(val){
				var http = $http.get('//maps.googleapis.com/maps/api/geocode/json', {
			      	params: {
			        	address: val,
			        	sensor: false
			      	}
			    });
			    var resourse = _resource.get({
			        	address: 'airport' + val,
			        	sensor: false
			      	}).$promise;

			    return resourse;
			},

			//https://gist.github.com/danasilver/6024009 РјРµС‚РѕРґ С„РёР»СЊС‚СЂР°С†РёРё РґР°РЅРЅС‹С…  РїРѕ С‚РёРїСѓ
			city : function(val){
			    var resourse = _resource.get({
			        	address: val,
			        	sensor: false
			      	}).$promise.then(function(data){
			      		var results = data['results'];
						if (results[0]) {
							for (var i = 0; i < results.length; i++) {
								if (results[i].types[0] === "locality") {
									var city = results[i].address_components[0].long_name;
									results[i].formatted_address = city;
								}
							}
						}
						return data;
			      	});

			    return resourse;
			},

			state : function(val){
			    var resourse = _resource.get({
			        	address: val,
			        	sensor: false
			      	}).$promise;

			    return resourse;
			},

			country : function(val){
			    var resourse = _resource.get({
			        	address: val,
			        	sensor: false
			      	}).$promise;

			    return resourse;
			}

		}
	}])
	.service('wsa_CurrentMarkersService', [function(){

		var markers = [];

		return {

			getMarkers : function() {
				return markers;
			},

			setMarkers : function( newMarkers) {
				markers = newMarkers;
			}
		}
	}])
	.service('wsa_CurrentSessionService', [function(){

		var _currentSession = {};

		return {

			updateCurrentSession : function( newSessionData) {
				_currentSession = newSessionData;
			},

			getCurrentSession : function(){
				return _currentSession;
			}
		}

	}])
	.service('wsa_InquiryService', [function(){
	/* РЎРµСЂРІРёСЃ РґР»СЏ РІР°Р»РёРґР°С†РёРё Рё РѕС‚РїСЂР°РІРєРё РґР°РЅРЅС‹С… РЅР° СЃРµСЂРІРµСЂ */
	}])
