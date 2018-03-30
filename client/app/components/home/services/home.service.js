function postService($http) {
    this.getAllPosts = function () {
        return $http.get('/api/posts', {cache: true}).then(function (response) {
            return response.data
        })
    }
}

module.exports = postService;
