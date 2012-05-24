// Our requires
var StartView = require('./start')
  , Task = require('../models/task')
  , TaskRunningView = require('./taskRunning')
  , OrganizationsView = require('./organizations');

// We extend Backbone Views with our own animations
require('./animations');

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

    // Instantiate our Views
    this.start = new StartView;
    this.organizations = new OrganizationsView;
    this.taskRunning = new TaskRunningView({ model: new Task })

    // ... and render those that need it
    this.$el.append(this.taskRunning.render().el);
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
  taskStarted: function() {
    this.taskRunning.taskStarted();
  },

  // Flags that a background action has ended
  taskEnded: function() {
    this.taskRunning.taskEnded();
  }

});
