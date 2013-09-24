// This is how you define a RequireJS module
// The callback function parameter has to match the beginning array position
// The naming of the parameter is arbitrary, could be anything you consider meaningful
define(['backbone', 'underscore', 'localstorage'], function (Backbone, _, localstorage) {
    // This is the main container DOM id
    // View for each router will overwrite this DOM
    var _MAIN_VIEW = "#svcc-demo-1";

    // This is how you define a Router
    // Notice that routes below,  it is "route": a_callback_function
    return Backbone.Router.extend({
        // routes are bunch of mappings, it map a string to a function name
        routes: {
            "": "routeHome",
            "demo/show/:id": "routeDemoShow",
            ":module/:action/:id": "routeModuleAction"
        },
        routeHome: function () {
            // This is a technique for sharding the initial page load
            // Some people refer this as dynamic load
            // This is saying, fetching the following file,
            // when it is done, please run the function
            require(["app/DemoHomeModule"], _.bind(function(HomeModule) {
                var module = new HomeModule({
                    container: _MAIN_VIEW
                });

                // fetch is a Backbone collection function, it means get the data
                // If you are using REST, it is equivalent to sending 'GET' request
                module.getCollection().fetch();
            }, this));
        },
        // the id in this function are passed from the route :id
        routeDemoShow: function (id) {
            require(["app/DemoUserDetailModule"], _.bind(function(UserDetailModule) {
                var module = new UserDetailModule({
                    container: _MAIN_VIEW,
                    userId: id
                });

                // set is the Backbone collection / model function
                // it will change the attributes in the model
                // and it will trigger a 'change' event
                // Ok, it is important, let me say it again
                // it will trigger a 'change' event
                module.getModel().set({
                    height:'120cm',
                    hobby: 'badminton, squash, swimming, soccer'
                }); 

            }, this));

        },
        // Leave blank intentionally for those who are curious and adventerous
        // For example, what happen when a user asked for /user/edit/1
        // But free feel experiment on that if you dare to \o/
        routeModuleAction: function(module, action, id) {
        
        }
    });
});
