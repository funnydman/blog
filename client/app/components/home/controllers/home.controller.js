function homeController ($scope, postService) {
  postService.getAllPosts().then(function (posts) {
    $scope.posts = posts
  })
}

module.exports = homeController
