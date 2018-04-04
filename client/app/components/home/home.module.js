const homeController = require('./controllers/home.controller.js');

// styles
require('./asserts/style.less');

angular
  .module('homeApp', [])
  .controller('homeController', homeController);
