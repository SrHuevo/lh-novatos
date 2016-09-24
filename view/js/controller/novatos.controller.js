novatos.controller('NovatosController', function($scope, NovatosService, PadrinosService){
    $scope.novatos = [];
    NovatosService.getList().then(function(response){
        $scope.novatos = response.data;
    }, function() {
        LoginService.logout();
    });
    $scope.padrinos = [];
    PadrinosService.getList().then(function(response){
        $scope.padrinos = response.data;
    }, function(err) {
        alert(err);
    });

    $scope.submitForm = function(){
        NovatosService.new($scope.novato).then(function(response){
            $scope.novatos.push(response.data);
            $scope.novato = undefined;
            $scope.padrino = undefined;
        }, function(err){
            alert(err);
        });
    }

    $scope.isAdmin = function(){
        return getCookie('Authorization') !== undefined;
    }
});
