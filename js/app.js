angular.module('starter', ['ngRoute'])

.config(function ($routeProvider) {

    $routeProvider.when("/player", {
        templateUrl: "view/player.html",
        controller:  "ControllerPlayer"
    })

    // Se a rota não for encontrada, redireciona para:
    $routeProvider.otherwise({redirectTo: "/player"});

})