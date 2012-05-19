var App = require('./views/app');

// Our Applications Starting Point
// ------------------------------

window.app = new App;
Backbone.history.start({ pushState: true });
