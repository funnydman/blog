const mainRouterProvider = require('./app.route.js');
require('./components/home/home.module.js');
require('./components/post/post.module.js');
require('./shared/sidebar/sidebar.module.js');
angular
    .module('mainApp', ['homeApp', 'postApp', 'sidebarApp', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', mainRouterProvider]);
