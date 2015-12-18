app.factory("Albums", function ($http) {
    return {
        getAlbums: function (callback) {
            $http.get("/data/data.json").success(callback);
        },
        getAlbum: function (id, callback) {
            this.getAlbums(function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        callback(data[i]);
                    }
                }
            });
        }
    };
});