var app = angular.module("smarya", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/bhoji", {
        templateUrl : "bhogi.htm"
    })
   
    .otherwise({
        template : "404.html"
    });
});