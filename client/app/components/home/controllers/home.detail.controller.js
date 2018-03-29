function homeDetailController($scope, $http, $stateParams) {
    $scope.id = $stateParams.postId;

    function getPostById(posts, postId) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].id == postId) {
                return posts[i];
            }
        }
    }

    $http.get('/api/posts').then(function (response) {
        $scope.posts = response.data;

        $scope.post = getPostById($scope.posts, $scope.id);
    });

}

module.exports = homeDetailController;