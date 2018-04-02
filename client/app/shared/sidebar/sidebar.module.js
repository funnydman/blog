const authController = require('./controllers/auth.sidebar.controller.js');


angular
  .module('sidebarApp', [])
  .controller('authController', authController);
