function postService($http) {
  this.getAllPosts = function () {
    return $http.get('/api/posts', { cache: true }).then(response => response.data);
  };
}

module.exports = postService;