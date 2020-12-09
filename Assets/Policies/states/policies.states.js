app.config(function ($stateProvider, $urlRouterProvider) {
    var states = [
        {
            name: 'main',
            url: '/',
            views: {
                '': { template: '<policies-main-comp policies="policies"  ></policies-main-comp >' },
            },
            resolve: {
            },
        },
        {
            name: 'view',
            url: '/view/:id',
            views: {
                '': { component: 'policiesViewComp' },
            },
            resolve: {
            },
        },
        {
            name: 'update',
            url: '/update/:id',
            views: {
                '': { component: 'policiesUpdateComp' },
            },
            resolve: {
            },
        },
        {
            name: 'create',
            url: '/create/',
            views: {
                '': { component: 'policiesCreateComp' },
            },
            resolve: {
            },
        },
        {
            name: 'info',
            url: '/info',
            template: '<h1>This is Info</h1>'
        }
    ];
    states.forEach((state) => $stateProvider.state(state));
    $urlRouterProvider.otherwise('/');
});




