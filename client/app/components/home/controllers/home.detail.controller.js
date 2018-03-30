function homeDetailController($scope, $http, $stateParams, postService) {
  $scope.id = $stateParams.postId;

  function getPostById(posts, postId) {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id == postId) {
        return posts[i];
      }
    }
  }

  postService.getAllPosts().then((posts) => {
    $scope.posts = posts;
    $scope.post = getPostById($scope.posts, $scope.id);
  });
}

module.exports = homeDetailController;
