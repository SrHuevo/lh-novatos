novatos.controller('PadrinosController', function($scope, PadrinosService){
    $scope.padrinos = [];
    PadrinosService.getList().then(function(response){
        $scope.padrinos = response.data;
        $scope.padrinos.forEach(function(e,i){
            $scope.mapPadrinos[e.padrinos] = {};
        });
    }, function(err) {
        alert(err);
    });
    $scope.novatos = [];
    NovatosService.getList().then(function(response){
        response.data;
    }, function() {
        LoginService.logout();
    });

    $scope.submitForm = function(){
        PadrinosService.new($scope.padrino).then(function(response){
            $scope.padrinos.push(response.data);
            $scope.padrino = {};
        }, function(err){
            alert(err);
        });
    }

    $scope.isAdmin = function(){
        return getCookie('Authorization') !== undefined;
    }
});
