var app = angular.module("workshopApp", ["ngRoute"]);

app.config(function ($routeProvider) {
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
		.otherwise({
			redirectTo: "/home"
		});	
});