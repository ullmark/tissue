
// Routers: Router
// ---------------
// This Backbone router controls the state of the application

module.exports = Backbone.Router.extend({
  // GitHub OAuth v2. Client Key
  githubClientKey: 'fedd4b9d16560ee6cd35',

  // ...which handles the following routes
  routes: {
    ""                            : "start",
    "auth"                        : "auth",
    "repos/:repo"                 : "repo",
    "repos/:repo/issues/:issue"   : "issue",
    "*splat"                      : "catchAll"
  },

  // When router is instantiated check for a GitHub auth token
  initalize: function() {
    _.bindAll(this, 'auth', 'onAccessTokenRecieved');
  },

  // ### Route Handlers

  start: function() {
  },

  // Auth route is triggered by the return redirect
  // by githubs oauth
  auth: function() {
    // Get the code from the parameters
    var code = '';
    ss.rpc('auth.getAccessToken', code, this.onAccessTokenRecieved);
  },

  repo: function(repo) {
  },

  issue: function(repo, issue) {
  },

  // The catch all route is triggered when someone fiddles with the
  // url manually (or when the code does something it shouldn't ;-))
  catchAll: function(splat) {
    this.navigate('', { trigger: true });
  },

  // ### Other Stuff

  onAccessTokenRecieved: function() {
    // When we've recieved a valid access token from
    // github, navigate to the start
    this.navigate('/', { trigger: true });
  }
});
