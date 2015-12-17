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

app.controller("HomeController", function ($scope) {
	
});

app.controller("AlbumsController", function ($scope, $http) {
	$http.get("/data/data.json").then(function (response) {
		$scope.albums = response.data.albums;
	});
});

app.controller("AlbumController", function ($scope, $http, $routeParams) {
	$http.get("/data/data.json").then(function (response) {
		var id = $routeParams.id;

		$scope.album = response.data.albums[id];
	});
});

app.filter("trustUrl", function ($sce) {
	return function (recordingUrl) {
    	return $sce.trustAsResourceUrl(recordingUrl);
    };
});