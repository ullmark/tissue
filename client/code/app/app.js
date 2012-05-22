var App = require('./views/app')
  , Router = require('./routers/router');

// Applications Starting Point
// -------------------------------
// We kick of the application by instantiating the App View
// and our router

window.app = new App;
window.router = new Router;

// ...and starting backbones history, to enable our router
Backbone.history.start({ pushState: true });
