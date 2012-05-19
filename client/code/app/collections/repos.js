var Repo = require('../models/repo');

// Repo Collection
// ---------------

module.exports = Backbone.Collection.extend({
  // ... contains Repo's
  model: Repo
});
