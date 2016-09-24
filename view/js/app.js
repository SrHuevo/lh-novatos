var novatos = angular.module('Novatos', ['ngRoute']);

novatos.config(function($routeProvider) {

    $routeProvider
    .when('/login', {
        templateUrl : 'template/login.html',
        controller : 'LoginController'
    })
    .when('/puntos', {
        templateUrl : 'template/puntos.html',
        controller : 'PuntosController'
    })
    .when('/novatos', {
        templateUrl : 'template/novatos.html',
        controller : 'NovatosController'
    })
    .when('/padrinos', {
        templateUrl : 'template/padrinos.html',
        controller : 'PadrinosController'
    })
    .otherwise({
        redirectTo: '/puntos',
    });
});
