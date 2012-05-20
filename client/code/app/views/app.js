
// Views: App
// ----------
// Our top most gui component. This Backbone View wraps all other
// views in our application.

module.export = Backbone.View.extend({
  // it's element is the div wrapping our entire page
  // which always is present
  el: $('#tissue'),

  // When instantiated it creates the other needed
  // views in the application
  initialize: function() {
    _.bindAll(this, 'backgroundActionStart', 'backgroundActionEnd');
    // Initialize the background actions counter
    this.backgroundActions = 0;
  },

  // Flags that a background action has started
  backgroundActionStart: function() {
    this.backgroundActions++;
    if (this.backgroundActions > 0) {
    }
  },

  // Flags that a background action has ended
  backgroundActionEnd: function() {
    this.backgroundActions--;
    if (this.backgroundActions < 1) {
    }
  }

});
