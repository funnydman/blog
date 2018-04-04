function authController($scope) {
  $scope.send = function () {
    console.log($scope.username);

    console.log($scope.password);
  };
}

module.exports = authController;
