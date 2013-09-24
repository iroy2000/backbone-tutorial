// This is how you defined a requireJS module
// The callback function parameter has to match the position of the beginning array
define(['models/Demo', 'views/demo/UserDetailView'], function(TestData, UserDetailView) {
    var DemoUserDetailModule = function(options) {
        this.collection = new TestData.Collection;
        
        this.model      = new TestData.Model(
            this.collection.localStorage.find({
                id:options.userId
            })
        );

        this.options = options;
        this.init();
    };

    _.extend(DemoUserDetailModule.prototype, {
        init: function() {
            var view = new UserDetailView({
                el: this.options.container,
                model: this.model
            });
            
            // this view will listen to the incoming model
            // whenever there is a 'change' event
            // it will trigger the render function
            view.listenTo(this.model, 'change', view.render);
        },
        getModel: function() {
            return this.model;
        }
    });

    return DemoUserDetailModule;
});
