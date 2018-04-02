const homeController = require('./controllers/home.controller.js');

require('./asserts/less/style.less');

angular
  .module('homeApp', [])
  .controller('homeController', homeController);

