const postDetailController = require('./controllers/post.detail.controller');
const postService = require('./services/post.service.js');

angular
  .module('postApp', [])
  .controller('postDetailController', postDetailController)
  .service('postService', postService);
