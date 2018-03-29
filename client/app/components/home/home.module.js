var homeController = require('./controllers/home.controller.js');
var homeDetailController = require('./controllers/home.detail.controller');

//styles
require('./asserts/style.less');

angular
    .module('homeApp', [])
    .controller('homeController', homeController)
    .controller('homeDetailController', homeDetailController);
