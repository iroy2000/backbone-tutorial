define(function() {
    var Model, Collection;
    
    // This is how you extend a Backbone Model
    Model = Backbone.Model.extend({
        defaults: function() {
            return {
                name: 'no name',
                age: 0,
                height: '0',
                nickname: 'no nickname',
                hobby: 'no hobby'
            };
        },
        // everytime when you save a model
        // validate function will be called
        // it is an "abstract" function pre-defined in Backbone
        validate: function(attrs, options) {

            if(!attrs.name || _.isNull(attrs.name)) {
                return 'Name is a required field';
            } 

            if(isNaN(attrs.age) || !attrs.age) {
                return 'Age should be a number';
            } 
            
            if(attrs.age > 130) {
                return 'World Record\'s age is still less than 130 ...';
            }
        }
    });

    // This is how you extend a Backbone Collection
    // I'm using localstorage here
    // But you can use whatever data source you like
    Collection = Backbone.Collection.extend({
        model: Model,
        localStorage: new Backbone.LocalStorage("test-framework"),
        comparator:'name'
    });

    return {
        Model:Model,
        Collection:Collection
    }
});
