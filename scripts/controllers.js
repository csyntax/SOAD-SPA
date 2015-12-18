app.controller("HomeController", function ($scope) {
	
});

app.controller("AlbumsController", function ($scope, Albums) {
	Albums.getAlbums(function (albums) {
        $scope.albums = albums;
    });

	/*$http.get("/data/data.json").then(function (response) {
		$scope.albums = response.data.albums;
	});*/
});

app.controller("AlbumController", function ($scope, $routeParams, Albums) {
	/*$http.get("/data/data.json").then(function (response) {
		var id = $routeParams.id;

		$scope.album = Albums.getAlbumById(id);
	});*/

	Albums.getAlbum($routeParams.id, function (album) {
		 $scope.album = album;
	});
	
});