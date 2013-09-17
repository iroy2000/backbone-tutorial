/**
 * This is just a Demo Testing View
 */
define(['text!templates/demo/data_row.html', 'text!templates/demo/container.html'],function(DataRowTemplate, ContainerTemplate) {
    // this is the view for each item in the List
    var ViewItem = Backbone.View.extend({
        tagName: 'tr',
        events: {
            "click .remove": "remove"
        },
        initialize: function(options) {
            this.template = _.template(DataRowTemplate);
        },
        remove: function(e) {
            this.model.destroy();
            this.$el.remove();
            e.preventDefault();
        },
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
                // sort the collection based on our criteria defined in model comparator
                this.collection.sort();

                // we show the header
                this.$el.find('.table-striped').show();                

                // we display all items
                this.collection.each(_.bind(function(model) {
                    var itemView = new ViewItem({
                        model:model
                    });
                    this.$el.find('tbody').append(itemView.render().$el);
                },this));
            }
        }
    });
});
