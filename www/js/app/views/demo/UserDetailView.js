// text! plugin is for requireJS fetching a file as text
// What we do here is fetching a template and use in our view
define(['text!templates/demo/user_detail.html'], function(UserDetailTemplate) {
    return Backbone.View.extend({
        initialize: function() {
            // _.template is a underscore function to create a template from your html fragment
            this.template = _.template(UserDetailTemplate);
        },
        render: function() {
            // You will need to convert your model into JSON data
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});
