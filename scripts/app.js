var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(false).hashPrefix("!");
	
	$routeProvider
		.when("/home", {
			templateUrl: "views/HomeView.html"
		})
		.when("/albums", {
			templateUrl: "views/AlbumsView.html"
		})
		.when("/album/:id", {
			templateUrl: "views/AlbumView.html"
		})
		.when("/galery", {
			templateUrl: "views/GaleryView.html"
		})
		.otherwise({
			redirectTo: "/home"
		});	
});