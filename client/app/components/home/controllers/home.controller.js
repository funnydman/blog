function homeController($scope, postService) {
  postService.getAllPosts().then((posts) => {
    $scope.posts = posts;
  });
}

module.exports = homeController;
