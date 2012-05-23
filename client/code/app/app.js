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

// We add a slide out function to all views, to reuse it's animation
Backbone.View.prototype.slideOut = function(options) {
  var width = $(window).width();
  var direction = options.direction == 'left' ? '-' : '';
  this.$el.css({ position: 'relative' });
  this.$el.animate({ left: direction + width + 'px' }, 300, function() {
    $(this).hide();
  });
};

// ... and a slide in
Backbone.View.prototype.slideIn = function(options) {
};
