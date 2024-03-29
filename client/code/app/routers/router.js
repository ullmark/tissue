
// Tissue Router
// ---------------
// This Backbone router controls the state of the application

// Extends [Router]()
module.exports = Backbone.Router.extend({

  // GitHub OAuth v2. Client Key
  githubClientKey: 'fedd4b9d16560ee6cd35',

  // Sandles the following routes
  routes: {
    ""                            : "start",
    "repos"                       : "repos",
    "repos/:repo"                 : "repo",
    "repos/:repo/issues/:issue"   : "issue",
    "auth/?code=:code"            : "auth",
  },

  // When router is instantiated check for a GitHub auth token
  initalize: function() {
    _.bindAll(this);
  },

  // ### Route Handlers

  startRoute: function() {
    if (app.accessToken) {
      app.showOrganizations();
    }
  },

  // Auth route is triggered by the return redirect
  // by githubs oauth
  authRoute: function(code) {
    var _this = this;
    app.taskStarted();
    ss.rpc('auth.createAccessToken', code, function(accessToken) {
      // Assign the token to our app to be easily accessed
      // globally
      app.accessToken = accessToken;
      app.taskEnded();
      _this.navigate('/', { trigger: true });
    });
  },

  repoRoute: function(repo) {
  },

  issueRoute: function(repo, issue) {
  },

  // The catch all route is triggered when someone fiddles with the
  // url manually (or when the code does something it shouldn't ;-))
  catchAll: function(splat) {
  }

});
