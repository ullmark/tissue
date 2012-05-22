var StartView = require('./start');

// Views: App
// ----------
// Our top most gui component. This Backbone View wraps all other
// views in our application.

module.exports = Backbone.View.extend({
  // it's element is the div wrapping our entire page
  // which always is present
  el: $('#tissue'),

  // When instantiated it creates the other needed
  // views in the application
  initialize: function() {
    _.bindAll(this);
    // Initialize the background actions counter
    this.backgroundActions = 0;
    this.start = new StartView;
  },

  isAuthenticated: function() {
    return !_.isUndefined(this.accessToken);
  },

  // Flags that a background action has started
  backgroundActionStarted: function() {
    this.backgroundActions++;
    if (this.backgroundActions > 0) {
    }
  },

  // Flags that a background action has ended
  backgroundActionEnded: function() {
    this.backgroundActions--;
    if (this.backgroundActions < 1) {
    }
  }

});
