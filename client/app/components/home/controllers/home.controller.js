function homeController($scope, $http) {
  $http.get('/api/posts').then((response) => {
    $scope.posts = response.data;
  });
}
module.exports = homeController;
