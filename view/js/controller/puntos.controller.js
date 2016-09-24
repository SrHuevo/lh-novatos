novatos.controller('PuntosController', function($scope, AccionesService, PadrinosService, NovatosService){
    $scope.acciones = [];
    AccionesService.getList().then(function(response){
        $scope.acciones = response.data;
    }, function(err) {
        alert(err);
    });
    $scope.padrinos = [];
    PadrinosService.getList().then(function(response){
        $scope.padrinos = response.data;
    }, function(err) {
        alert(err);
    });
    $scope.novatos = [];
    NovatosService.getList().then(function(response){
        $scope.novatos = response.data;
    }, function() {
        LoginService.logout();
    });

    $scope.submitForm = function(){
        AccionesService.new($scope.accion).then(function(response){
            var accion = response.data;
            $scope.acciones.push(accion);
            $scope.padrinos.forEach(function(e,i){
                if(accion.padrino == e.nombre)
                    e.puntos = e.puntos + accion.puntos;
            })
        }, function(err){
            alert(err);
        });
    }

    $scope.isAdmin = function(){
        return getCookie('Authorization') !== undefined;
    }

    $scope.formatDate = function(date){
        var año = date.substr(2,2);
        var mes = date.substr(5,2);
        var dia = date.substr(8,2);
        var hora = date.substr(11,2);
        var min = date.substr(14,2);
        var seg = date.substr(17,2);
        return dia+'/'+mes+'/'+año+' '+hora+':'+min+':'+seg;
    }
});
