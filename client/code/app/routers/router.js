
// Routers: Router
// ---------------
// This Backbone router controls the state of the application

module.exports = Backbone.Router.extend({

  // GitHub OAuth v2. Client Key
  githubClientKey: 'fedd4b9d16560ee6cd35',

  // Sandles the following routes
  routes: {
    ""                            : "startRoute",
    "repos/:repo"                 : "repoRoute",
    "repos/:repo/issues/:issue"   : "issueRoute",
    "auth/?code=:code"            : "authRoute",
    "*splat"                      : "catchAll"
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
    app.backgroundActionStarted();
    ss.rpc('auth.createAccessToken', code, function(accessToken) {
      // Assign the token to our app to be easily accessed
      // globally
      app.accessToken = accessToken;
      app.backgroundActionEnded();
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
