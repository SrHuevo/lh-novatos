novatos.service('AccionesService', function($http, $q){
    this.getList = function(){
		return $http({
			method: 'GET',
			url: '/api/accion'
		});
	};
    this.new = function(accion){
		return $http({
			method: 'PUT',
			url: '/api/accion',
    		headers: {'Authorization': getCookie('Authorization')},
            data: accion
		});
	};
    this.delete = function(accion){
		return $http({
			method: 'DELETE',
			url: '/api/accion/'+accion._id,
    		headers: {'Authorization': getCookie('Authorization')}
		});
    }
});
