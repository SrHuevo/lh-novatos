novatos.service('NovatosService', function($http, $q){
    this.getList = function(){
  		var deferred = $q.defer();
		return $http({
			method: 'GET',
			url: '/api/novato'
		});
	};
    this.new = function(novato){
  		var deferred = $q.defer();
		return $http({
			method: 'PUT',
			url: '/api/novato',
    		headers: {'Authorization': getCookie('Authorization')},
            data: novato
		});
	};
});
