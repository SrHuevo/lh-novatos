novatos.service('AccionesService', function($http, $q){
    this.getList = function(){
  		var deferred = $q.defer();
		return $http({
			method: 'GET',
			url: '/api/accion'
		});
	};
    this.new = function(accion){
  		var deferred = $q.defer();
		return $http({
			method: 'PUT',
			url: '/api/accion',
    		headers: {'Authorization': getCookie('Authorization')},
            data: accion
		});
	};
});
