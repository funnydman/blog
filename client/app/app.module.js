var mainRouterProvider = require('./app.route.js');
require('./components/home/home.module.js');

angular
    .module('mainApp', ['homeApp', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', mainRouterProvider]);