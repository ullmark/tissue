
// Models: Comment
// ---------------
// The Comment model is our backbone abstraction of comments on a issue

module.exports = Backbone.Model.extend({

  // ## Backbone Sync
  // We override the default sync to work with github issues
  sync: function(method, model, options) {
    app.backgroundActionStart();
  }
});
