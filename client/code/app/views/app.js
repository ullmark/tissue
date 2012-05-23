var StartView = require('./start')
  , WorkingView = require('./working');

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
    // our Views
    this.start = new StartView;
    this.workingNotification = new WorkingView;
  },

  showOrganizations: function() {
    this.start.slideOut({ direction: "left" });
  },

  // Gets the access token by...
  getAccessToken: function(callback) {
    // ... first by checking in the client side...
    if (app.accessToken) return callback(app.accessToken);
    // ... or by checking for token stored in session
    ss.rpc('auth.getAccessToken', callback);
  },

  // Flags that a background action has started
  backgroundActionStarted: function() {
    this.backgroundActions++;
    this.workingNotification.show();
  },

  // Flags that a background action has ended
  backgroundActionEnded: function() {
    this.backgroundActions--;
    if (this.backgroundActions == 0) {
      this.workingNotification.hide();
    }
  }

});
