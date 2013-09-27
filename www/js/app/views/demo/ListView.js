// This is just a Demo Testing View
// This is how you define a RequireJS module 
define(['text!templates/demo/data_row.html', 'text!templates/demo/container.html'],function(DataRowTemplate, ContainerTemplate) {
    // this is the view for each item in the List
    var ViewItem = Backbone.View.extend({
        tagName: 'tr',
        events: {
            "click .remove": "remove"
        },
        // all your backbone object has this function
        // it is for your to setup or initialize
        // this function will be called when this View is instantiated
        initialize: function(options) {
            this.template = _.template(DataRowTemplate);
        },
        remove: function(e) {
            // destory is a model function, it means delete itself
            this.model.destroy();

            // backbone is using jQuery ( or other jQuery like lib ) for DOM operation
            this.$el.remove();
            e.preventDefault();
        },
        // appending templatize item into the DOM
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    
    // this is the main View
    return Backbone.View.extend({
        events: {
            "click .add": "add"
        },
        initialize: function(options) {
            this.template = _.template(ContainerTemplate);
            // we re-render stuff when sync / remove happens
            this.listenTo(this.collection, 'sync remove', this.render);
            
            // we show error when there are errors
            this.collection.on('invalid', function(model, error) {
                this.$el.find('.error').html('<i class="icon-exclamation-sign"></i>'+error).show();
            }, this); 
        },
        add: function() {
            this.$el.find('.error').hide();
            // collection create will trigger add and sync
            this.collection.create({name:this.$el.find('#name').val(), age: this.$el.find('#age').val()});
        },
        render: function() {
            // we clean the list first
            this.$el.empty();
            this.$el.append(this.template);

            // we only need to parse the following logic if collection has more than 1 item 
            if(this.collection.length > 0) {
                var fragment = document.createDocumentFragment();
                
                // sort the collection based on our criteria defined in model comparator
                this.collection.sort();

                // we show the header
                this.$el.find('.table-striped').show();                

                // we load all items into a floating dom
                this.collection.each(function(model) {
                    var itemView = new ViewItem({
                        model:model
                    });
                    
                    fragment.appendChild(itemView.render().el);
                });

                this.$el.find('tbody').append(fragment);
            }
        }
    });
});
