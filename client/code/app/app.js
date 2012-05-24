var App = require('./views/app')
  , Router = require('./routers/router');

// Applications Starting Point
// -------------------------------

// Override default Backbone sync behaviour
Backbone.sync = function(method, model, options) {
  var store = model.store || model.collection.store;
  switch (method) {
    case "create": return null;
    case "read": return store.read(model);
    case "update": return null;
    case "delete": return null;
  }
};

// We kick of the application by instantiating the App View
// and our router
window.app = new App;
window.router = new Router;

// ...and starting backbones history, to enable our router
Backbone.history.start({ pushState: true });

