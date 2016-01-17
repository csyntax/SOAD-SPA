app.controller("HomeController", function ($window) {
	$window.document.title = "Home";
});

app.controller("AlbumsController", function ($scope, $window, Albums) {
	Albums.getAlbums(function (albums) {
		$window.document.title = "Albums";
        $scope.albums = albums;
    });
});

app.controller("AlbumController", function ($scope, $routeParams, $window, Albums) {
	Albums.getAlbum($routeParams.id, function (album) {
		$window.document.title = "Album | " + album;
		$scope.album = album;
	});
});