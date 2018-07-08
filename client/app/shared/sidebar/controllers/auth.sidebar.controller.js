function authController($scope, $http) {
    $scope.send = function () {

        return $http.post('/sign-in').then(
            response = response.data;
    )
    };
}

module.exports = authController;
