
// Routers: Router
// ---------------
// This Backbone router controls the state of the application

module.exports = Backbone.Router.extend({

  // which handles the following routes
  routes: {
    ""                            : "start",
    "auth"                        : "auth",
    "repos/:repo"                 : "repo",
    "repos/:repo/issues/:issue"   : "issue"
  },

  start: function() {
  },

  auth: function() {
  },

  repo: function(repo) {
  },

  issue: function(repo, issue) {
  }

});
