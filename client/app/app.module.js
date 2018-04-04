// here we

const mainRouterProvider = require('./app.route.js');
require('./components/home/home.module.js');


angular
  .module('mainApp', ['ui.router', 'homeApp'])
  .config(['$stateProvider', '$urlRouterProvider', mainRouterProvider]);
