function homeController($scope, $http) {
    $http.get('/api/posts').then(function (response) {

        $scope.posts = response.data;
    });
}

module.exports = homeController;