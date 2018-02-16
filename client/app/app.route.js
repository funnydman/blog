function mainRouterProvider ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url:'/',
            template: require('./components/home/home.tmp.html'),
            controller: 'homeController'
        })
        .state('blog', {
            url:'/blog',
            template: 'templates/home.html',
            controller: 'blogController'
        })
        .state('about', {
            url:'/about',
            template: 'templates/home.html',
            controller: 'aboutController'
        })

};

module.exports = mainRouterProvider;