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