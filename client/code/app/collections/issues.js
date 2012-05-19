var Issue = require('../models/issue');

// Issue Collection
// ----------------

module.exports = Backbone.Collection.extend({
  // .. contains Issues
  model: Issue
});
