function homeDetailController($scope, $http, $stateParams, postService) {
    $scope.id = $stateParams.postId;

    function getPostById(posts, postId) {
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].id == postId) {
                return posts[i]
            }
        }
    }

    postService.getAllPosts().then(function (posts) {
        $scope.posts = posts;
        $scope.post = getPostById($scope.posts, $scope.id);
    })
}

module.exports = homeDetailController;
