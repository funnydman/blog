var homeController = require('./controllers/home.controller.js');
var homeDetailController = require('./controllers/home.detail.controller');
var postService = require('./services/home.service');
// styles
require('./asserts/style.less');

angular
  .module('homeApp', [])
  .controller('homeController', homeController)
  .controller('homeDetailController', homeDetailController)
  .service('postService', postService);
