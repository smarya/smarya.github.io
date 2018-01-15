var app = angular.module("smarya", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./index.htm"
    })
    .when("/bhogi", {
        templateUrl : "./bhogi.html"
    })
    .otherwise({
        redirectTo : "./404.html"
    });
});