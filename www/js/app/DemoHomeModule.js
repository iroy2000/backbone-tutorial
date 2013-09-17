// This is a demo
// Backbone let you do whatever you want to communicate with each component
// I'm here just wrap stuff inside a module
// It could be anything as long as it makes sense
define(['models/Demo', 'views/demo/ListView'], function (TestData, ListView) {
    var DemoHomeModule = function (options) {
        this.collection = new TestData.Collection;
        this.options = options;
        
        this.init();

        return this;
    };

    // this is underscore function to extend some objects
    _.extend(DemoHomeModule.prototype, {
        init: function() {
            this.listView = new ListView({
                el: this.options.container,
                collection: this.collection
            });
        },
        getCollection: function() {
            return this.collection;
        },
        getView: function() {
            return this.listView.$el;
        }
    });

    return DemoHomeModule;
});
