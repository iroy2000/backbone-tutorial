({
    appDir: "../www",
    baseUrl: 'js/',
    paths: {
        text:'vendor/text',
        models: 'app/models',
        views: 'app/views',
        routers: 'app/routers',
        templates: '../templates',
        localstorage: "vendor/backbone.localStorage",
        backbone: "vendor/amd/backbone",
        underscore: "vendor/amd/underscore",
        jquery: "vendor/jquery"
    },  
    dir: '../demo-built',
    modules: [
        {
            name: "main"
        },
        {
            name: 'app/DemoHomeModule'
        },
        {
            name: 'app/DemoUserDetailModule'
        }
    ]
})
