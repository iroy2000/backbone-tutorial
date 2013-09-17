// requireJS configuration
// baseUrl - where your javascript folder root is
// paths   - you can shortcut for your paths, it starts from "baseUrl"
// shims   - when a module is not a RequireJS module, you will need to define a 
//           shim to make that works RequireJS
requirejs.config({
    baseUrl: 'js/',
    paths: {
        text:'vendor/text',
        models: 'app/models',
        views: 'app/views',
        routers: 'app/routers',
        templates: '../templates',
        localstorage: 'vendor/backbone.localStorage',
        backbone: 'vendor/amd/backbone',
        underscore: 'vendor/amd/underscore'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        localstorage: {
            deps: ['backbone'],
            exports: 'Backbone'
        }
    }
});

// This is a demo, the following is fetching the demo router and instantiate it
require(['routers/DemoRouter'], function(DemoRouter) {
    new DemoRouter();

    // This will tell Backbone to start listening and responding to URL changes
    // This will also manages the browser history
    // There are many options you can pass in, but we will use the default here
    Backbone.history.start();

    // Ok, now your application begins monitoring url changes and invoke route callback
});
