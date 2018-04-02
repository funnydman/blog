function mainRouterProvider($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        content: {
          template: require('./components/home/home.tmp.html'),
          controller: 'homeController',
        },
        sidebar: {
          template: require('./shared/sidebar/sidebar.tmp.html'),
        },
      },
    })
    .state('post', {
      url: '/post/:postId',
      views: {
        content: {
          template: require('./components/post/post.detail.tmp.html'),
          controller: 'postDetailController',
        },
        sidebar: {
          template: require('./shared/sidebar/sidebar.tmp.html'),
        },
      },
    })
    .state('about', {
      url: '/about',
      views: {
        content: {
          template: require('./components/about/about.tmp.html'),
        },
      },

    });
}

module.exports = mainRouterProvider;
