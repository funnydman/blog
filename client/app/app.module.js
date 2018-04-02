const mainRouterProvider = require('./app.route.js');
require('./components/home/home.module.js');
require('./components/post/post.module.js');

angular
  .module('mainApp', ['homeApp', 'postApp', 'ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', mainRouterProvider]);
