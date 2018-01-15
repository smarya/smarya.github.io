var app = angular.module("smarya", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.htm"
    })
    .when("/bhogi", {
        templateUrl : "bhogi.htm"
    })
    .otherwise({
        template : "404.html"
    });
});