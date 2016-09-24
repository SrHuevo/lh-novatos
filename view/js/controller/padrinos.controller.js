novatos.controller('PadrinosController', function($scope, PadrinosService){
    $scope.padrinos = [];
    PadrinosService.getList().then(function(response){
        $scope.padrinos = response.data;
    }, function(err) {
        alert(err);
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
