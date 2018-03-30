const homeController = require('./controllers/home.controller.js');
const homeDetailController = require('./controllers/home.detail.controller');
const postService = require('./services/home.service');
// styles
require('./asserts/style.less');

angular
  .module('homeApp', [])
  .controller('homeController', homeController)
  .controller('homeDetailController', homeDetailController)
  .service('postService', postService);
