var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(false).hashPrefix("!");
	
	$routeProvider
		.when("/", {
			templateUrl: "/app/views/HomeView.html"
		})
		.when("/albums", {
			templateUrl: "/app/views/AlbumsView.html"
		})
		.when("/albums/:id", {
			templateUrl: "/app/views/AlbumView.html"
		})
		.otherwise({
			redirectTo: "/"
		});	
});