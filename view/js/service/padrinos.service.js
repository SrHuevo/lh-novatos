novatos.service('PadrinosService', function($http){
    this.getList = function(){
		return $http({
			method: 'GET',
			url: '/api/padrino'
		});
	};
    this.new = function(padrino){
		return $http({
			method: 'PUT',
			url: '/api/padrino',
    		headers: {'Authorization': getCookie('Authorization')},
            data: padrino
		});
	};
});
